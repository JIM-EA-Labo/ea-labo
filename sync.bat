@echo off
setlocal
echo ========================================
echo   EA Labo GitHub Sync Tool (JIM)
echo ========================================

echo [0/3] Updating assets version and build tag...
powershell -ExecutionPolicy Bypass -File update-version.ps1

echo [1/3] Adding changes...
git add .

for /f "tokens=1-4 delims=/ " %%a in ("%date%") do set d=%%a%%b%%c
for /f "tokens=1-2 delims=: " %%a in ("%time%") do set t=%%a%%b
set t=%t: =0%
echo [2/3] Committing changes...
git commit -m "Auto-sync: %d%_%t%"

echo [3/3] Pushing to GitHub...
git push origin main

echo ========================================
echo   Sync Complete!
echo   EA Labo is now updated and distributed.
echo ========================================
pause
