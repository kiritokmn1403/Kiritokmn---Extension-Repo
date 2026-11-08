# Builds the 4 multi-source extension APKs (Aniyomi/Nekoyomi anime + manga, SFW / 18+), signs them,
# and writes repo/index.min.json + repo/repo.json. Run from Windows (Android Studio JBR + Android SDK).
$ErrorActionPreference = 'Continue'; $ProgressPreference = 'SilentlyContinue'
$Here = Split-Path -Parent $MyInvocation.MyCommand.Path
$Root = Split-Path -Parent $Here
$Log = Join-Path $Here 'build_apks.log'
function L($m) { $t = (Get-Date).ToString('HH:mm:ss'); Add-Content -Path $Log -Value "$t $m" -Encoding UTF8; Write-Host "$t $m" }
Set-Content -Path $Log -Value "=== build_apks $(Get-Date)" -Encoding UTF8
$jbr = @('D:\Programs\ads\jbr', "$env:ProgramFiles\Android\Android Studio\jbr") | Where-Object { Test-Path "$_\bin\java.exe" } | Select-Object -First 1
$env:JAVA_HOME = $jbr; $env:PATH = "$jbr\bin;$env:PATH"
$env:GRADLE_USER_HOME = "D:\A.I Project\yh\gradle-home"
$env:ANDROID_HOME = Join-Path $env:LOCALAPPDATA 'Android\Sdk'; $env:ANDROID_SDK_ROOT = $env:ANDROID_HOME
L "JAVA_HOME=$jbr ANDROID_HOME=$env:ANDROID_HOME"
Set-Content -Path (Join-Path $Here 'local.properties') -Value ("sdk.dir=" + ($env:ANDROID_HOME -replace '\\', '\\')) -Encoding ASCII
# signing key (kept locally, never committed)
$ks = Join-Path $Here 'kiritokmn.jks'; $kp = Join-Path $Here 'keystore.properties'
if (-not (Test-Path $ks)) {
  $pw = -join ((48..57) + (65..90) + (97..122) | Get-Random -Count 24 | ForEach-Object { [char]$_ })
  & "$jbr\bin\keytool.exe" -genkeypair -keystore $ks -alias kiritokmn -keyalg RSA -keysize 2048 -validity 20000 -storepass $pw -keypass $pw -dname "CN=Kiritokmn Extension Repo, O=Kiritokmn, C=VN" 2>&1 | Out-Null
  Set-Content -Path $kp -Value "storeFile=kiritokmn.jks`nstorePassword=$pw`nkeyAlias=kiritokmn`nkeyPassword=$pw" -Encoding ASCII
  L 'created signing key kiritokmn.jks'
}
$props = @{}; Get-Content $kp | ForEach-Object { $k, $v = $_ -split '=', 2; $props[$k] = $v }
$cer = Join-Path $Here 'kiritokmn.cer'
& "$jbr\bin\keytool.exe" -exportcert -keystore $ks -alias kiritokmn -storepass $props.storePassword -file $cer 2>&1 | Out-Null
$x = New-Object System.Security.Cryptography.X509Certificates.X509Certificate2($cer)
$sha = [System.Security.Cryptography.SHA256]::Create(); $fp = ($sha.ComputeHash($x.RawData) | ForEach-Object { $_.ToString('x2') }) -join ''
L "signing fingerprint $fp"
Set-Content -Path (Join-Path $Here 'fingerprint.txt') -Value $fp -Encoding ASCII
# pick SDK platform / build-tools that are already installed (the SDK download host may be unreachable)
$plat = Get-ChildItem (Join-Path $env:ANDROID_HOME 'platforms') -Directory -ErrorAction SilentlyContinue | Where-Object { $_.Name -match '^android-(\d+)$' } | ForEach-Object { [int]($_.Name -replace 'android-', '') } | Where-Object { $_ -ge 30 } | Sort-Object -Descending | Select-Object -First 1
$bt = Get-ChildItem (Join-Path $env:ANDROID_HOME 'build-tools') -Directory -ErrorAction SilentlyContinue | Where-Object { $_.Name -match '^\d+\.\d+\.\d+$' } | Sort-Object { [version]$_.Name } -Descending | Select-Object -First 1 -ExpandProperty Name
L "installed platforms: $((Get-ChildItem (Join-Path $env:ANDROID_HOME 'platforms') -Directory).Name -join ',') build-tools: $((Get-ChildItem (Join-Path $env:ANDROID_HOME 'build-tools') -Directory).Name -join ',') -> using android-$plat / $bt"
Push-Location $Here
$code = 3
& .\gradlew.bat --no-daemon --stacktrace "-PextVersionCode=$code" "-PcompileSdkOverride=$plat" "-PbuildToolsOverride=$bt" :anime:assembleSfwRelease :anime:assembleNsfwRelease :manga:assembleSfwRelease :manga:assembleNsfwRelease 2>&1 | Out-File -FilePath (Join-Path $Here 'gradle.log') -Encoding utf8
L "gradle exit $LASTEXITCODE"
Pop-Location
$out = Join-Path $Root 'Output\apk-build'; New-Item -ItemType Directory -Force -Path $out | Out-Null
foreach ($m in 'anime', 'manga') { foreach ($f in 'sfw', 'nsfw') {
  $apk = Get-ChildItem (Join-Path $Here "$m\build\outputs\apk\$f\release") -Filter *.apk -ErrorAction SilentlyContinue | Select-Object -First 1
  if ($apk) { Copy-Item $apk.FullName (Join-Path $out "kiritokmn-$m-$f.apk") -Force; L "apk $m/$f $($apk.Length) bytes" } else { L "apk $m/$f MISSING" }
} }
& node (Join-Path $Root 'tools\build\aniyomi-index.mjs') $out $fp $code *>> $Log
L 'FINISHED'
