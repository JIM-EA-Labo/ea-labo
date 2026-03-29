@echo off
setlocal
echo ========================================
echo   EA Labo GitHub Sync Tool (JIM)
echo ========================================

:: 1. Auto-update version and build tag
echo [0/3] Updating assets version and build tag...
powershell -Command "(Get-Content -Raw index.html) -replace '\?v=[0-9]+', '?v=$(Get-Date -Format yyyyMMddHHmm)' -replace '<span id=\"app-version\" class=\"version-tag\">Build: [0-9.]+<', '<span id=\"app-version\" class=\"version-tag\">Build: $(Get-Date -Format yyyy.MM.dd.HHmm)<' | Set-Content index.html"

:: 1. Staging
echo [1/3] Adding changes...
git add .

:: 2. Commit
for /f "tokens=1-4 delims=/ " %%a in ("%date%") do set d=%%a%%b%%c
for /f "tokens=1-2 delims=: " %%a in ("%time%") do set t=%%a%%b
set t=%t: =0%
echo [2/3] Committing changes...
git commit -m "Auto-sync: %d%_%t%"

:: 3. Push
echo [3/3] Pushing to GitHub...
git push origin main

echo ========================================
echo   Sync Complete!
echo   EA Labo is now updated and distributed.
echo ========================================
pause
