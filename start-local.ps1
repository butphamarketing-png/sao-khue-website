$ErrorActionPreference = "Stop"

$repoRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $repoRoot

$env:PORT = "21322"
$env:BASE_PATH = "/"

$pnpmCandidates = @(
  "C:\Program Files\nodejs\node_modules\corepack\shims\pnpm.cmd",
  "C:\Program Files\nodejs\node_modules\corepack\shims\nodewin\pnpm.cmd",
  (Join-Path $env:APPDATA "npm\pnpm.cmd")
)

$pnpmPath = $pnpmCandidates | Where-Object { $_ -and (Test-Path $_) } | Select-Object -First 1

if (-not $pnpmPath) {
  Write-Host ""
  Write-Host "Khong tim thay pnpm.cmd." -ForegroundColor Red
  Write-Host "Hay kiem tra Node.js/pnpm da duoc cai dat tren may nay." -ForegroundColor Yellow
  Write-Host ""
  Write-Host "Sau khi cai xong, chay lai file: start-local.ps1" -ForegroundColor Cyan
  exit 1
}

Write-Host ""
Write-Host "Dang chay website local..." -ForegroundColor Green
Write-Host "Repo: $repoRoot" -ForegroundColor DarkGray
Write-Host "Port: $($env:PORT)" -ForegroundColor DarkGray
Write-Host ""
Write-Host "Sau khi server len, mo: http://localhost:$($env:PORT)/" -ForegroundColor Cyan
Write-Host "Admin: http://localhost:$($env:PORT)/admin" -ForegroundColor Cyan
Write-Host ""

& $pnpmPath --filter @workspace/sao-khue run dev
