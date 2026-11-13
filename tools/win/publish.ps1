# Publish: commit + push source and outputs to GitHub, create Release v<version> with every file in Output/,
# then verify that all assets were uploaded (names + sizes). Uses the owner's Git credentials (GitHub Desktop / GCM).
$ErrorActionPreference = 'Continue'; $ProgressPreference = 'SilentlyContinue'
$Root = Resolve-Path (Join-Path (Split-Path -Parent $MyInvocation.MyCommand.Path) '..\..')
$Log = Join-Path $Root 'Output\publish.log'
function L($m) { $t = (Get-Date).ToString('HH:mm:ss'); Add-Content -Path $Log -Value "$t $m" -Encoding UTF8; Write-Host "$t $m" }
Set-Content -Path $Log -Value "=== publish $(Get-Date)" -Encoding UTF8
Set-Location $Root
$Owner = 'kiritokmn1403'; $Repo = 'Kiritokmn---Extension-Repo'
$Ver = (Get-Content package.json -Raw | ConvertFrom-Json).version; $Tag = "v$Ver"
$git = (Get-Command git -ErrorAction SilentlyContinue).Source
if (-not $git) { $git = Get-ChildItem "$env:LOCALAPPDATA\GitHubDesktop" -Recurse -Filter git.exe -ErrorAction SilentlyContinue | Select-Object -First 1 -ExpandProperty FullName }
L "git=$git version=$Ver"
& $git config core.autocrlf false
& $git add -A *>> $Log
$msg = if ($env:PUB_MSG) { $env:PUB_MSG } else { "Extension Repo ${Tag}" }
& $git -c user.name="kiritokmn1403" -c user.email="kietnguyenworking1403@gmail.com" commit -m "Extension Repo ${Tag} - $msg" -m "Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>`nClaude-Session: https://claude.ai/code/session_01PnzRAuALf33FrB6yaura8o" *>> $Log
L 'pushing (this can take a while: repo/ contains every built plugin)'
& $git push origin HEAD:main *>> $Log
L "push exit $LASTEXITCODE"
# token from the Git credential manager (same login GitHub Desktop uses)
$cred = "protocol=https`nhost=github.com`n`n" | & $git credential fill 2>$null
$tok = ($cred | Where-Object { $_ -like 'password=*' }) -replace '^password=', ''
if (-not $tok) { L 'NO TOKEN: cannot create release automatically (sign in to GitHub Desktop / Git Credential Manager)'; exit 1 }
$H = @{ Authorization = "token $tok"; 'User-Agent' = 'kiritokmn-publish'; Accept = 'application/vnd.github+json' }
$api = "https://api.github.com/repos/$Owner/$Repo"
$rel = $null
try { $rel = Invoke-RestMethod -Headers $H -Uri "$api/releases/tags/$Tag" } catch { }
$notes = if (Test-Path CHANGELOG.md) { [string]([IO.File]::ReadAllText("$Root\CHANGELOG.md")) } else { "Extension Repo $Tag" }
if (-not $rel) {
  $body = @{ tag_name = $Tag; target_commitish = 'main'; name = "Kiritokmn Extension Repo $Tag"; body = $notes; draft = $false; prerelease = $false } | ConvertTo-Json
  $rel = Invoke-RestMethod -Headers $H -Method Post -Uri "$api/releases" -Body ([Text.Encoding]::UTF8.GetBytes($body)) -ContentType 'application/json; charset=utf-8'
  L "created release $($rel.html_url)"
} else { L "release exists $($rel.html_url)" }
$files = Get-ChildItem (Join-Path $Root 'Output') -File | Where-Object { $_.Name -notmatch '\.log$' }
foreach ($f in $files) {
  $exist = $rel.assets | Where-Object { $_.name -eq $f.Name }
  $same = $exist -and $exist.size -eq $f.Length
  if ($same -and $exist.digest) { $same = ($exist.digest -eq ('sha256:' + (Get-FileHash $f.FullName -Algorithm SHA256).Hash.ToLower())) }
  if ($same) { L "  skip $($f.Name) (already uploaded)"; continue }
  if ($exist) { Invoke-RestMethod -Headers $H -Method Delete -Uri "$api/releases/assets/$($exist.id)" | Out-Null }
  $u = "https://uploads.github.com/repos/$Owner/$Repo/releases/$($rel.id)/assets?name=$([uri]::EscapeDataString($f.Name))"
  try { $r = Invoke-RestMethod -Headers $H -Method Post -Uri $u -InFile $f.FullName -ContentType 'application/octet-stream' -TimeoutSec 1800; L "  uploaded $($f.Name) $($f.Length) bytes" }
  catch { L "  FAILED $($f.Name): $($_.Exception.Message)" }
}
# verification
$rel = Invoke-RestMethod -Headers $H -Uri "$api/releases/tags/$Tag"
$ok = 0
foreach ($f in $files) { $a = $rel.assets | Where-Object { $_.name -eq $f.Name -and $_.size -eq $f.Length }; if ($a) { $ok++ } else { L "  MISSING $($f.Name)" } }
L "verify: $ok/$($files.Count) assets present on $($rel.html_url)"
$remote = (& $git ls-remote origin refs/heads/main) -split "`t" | Select-Object -First 1
$local = (& $git rev-parse HEAD)
L "verify push: local=$local remote=$remote match=$($local -eq $remote)"
L 'FINISHED'
