# One-click build on the owner's Windows machine:
#   sources -> repo/ (vBook, Mangayomi, LNReader/IReader)  ->  APKs (Aniyomi/Nekoyomi)  ->  live tests  ->  README
$ErrorActionPreference = 'Continue'; $ProgressPreference = 'SilentlyContinue'
$Root = Resolve-Path (Join-Path (Split-Path -Parent $MyInvocation.MyCommand.Path) '..\..')
$Work = Join-Path (Split-Path -Parent $Root) '_work'
$Log = Join-Path $Root 'Output\build_all.log'
New-Item -ItemType Directory -Force -Path (Join-Path $Root 'Output') | Out-Null
function L($m) { $t = (Get-Date).ToString('HH:mm:ss'); Add-Content -Path $Log -Value "$t $m" -Encoding UTF8; Write-Host "$t $m" }
Set-Content -Path $Log -Value "=== build_all $(Get-Date)" -Encoding UTF8
Set-Location $Root
# dependencies: reuse _work\deps (esbuild, htmlparser2, css-select, acorn, escodegen, crypto-js, typescript)
$deps = Join-Path $Work 'deps'
if (-not (Test-Path (Join-Path $deps 'node_modules\typescript'))) { Push-Location $deps; & npm i --no-audit --no-fund typescript@5 *>> $Log; Pop-Location; L 'installed typescript' }
if (-not (Test-Path (Join-Path $Root 'node_modules'))) { cmd /c mklink /J "$Root\node_modules" "$deps\node_modules" | Out-Null; L 'linked node_modules' }
L 'step 1: build sources'
& node tools\build\build-all.mjs *>> $Log
L "build exit $LASTEXITCODE"
L 'step 2: build APKs'
& powershell -NoProfile -ExecutionPolicy Bypass -File (Join-Path $Root 'android\build_apks.ps1')
Get-Content (Join-Path $Root 'android\build_apks.log') -Tail 15 | ForEach-Object { L "  [apk] $_" }
L 'step 3: live tests'
& node tools\test\run-tests.mjs --conc 8 *>> $Log
Copy-Item (Join-Path $Root 'test-results.json') (Join-Path $Root 'data\test-results.json') -Force
L 'step 3b: Aidoku packages + live test of the Aidoku adapter (same JS that runs in JavaScriptCore)'
if (Get-Command cargo -ErrorAction SilentlyContinue) { & node tools\build\aidoku-build.mjs *>> $Log; L "aidoku build exit $LASTEXITCODE" } else { L '  cargo not installed: keeping the committed repo/aidoku packages' }
& node tools\test\aidoku-sim.mjs --all --conc 6 --json data\aidoku-test-results.json *>> $Log
L 'step 4: output bundle + README'
& node tools\build\make-output.mjs *>> $Log
& node tools\docs\gen-readme.mjs *>> $Log
L 'FINISHED'
