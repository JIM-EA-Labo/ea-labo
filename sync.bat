@echo off
setlocal
echo ========================================
echo   EA Labo GitHub Sync Tool (JIM)
echo ========================================

:: 1. ステージング
echo [1/3] Adding changes...
git add .

:: 2. コミット（現在の日時を込めて）
set commit_msg="Update EA Labo: %date% %time%"
echo [2/3] Committing changes...
git commit -m %commit_msg%

:: 3. プッシュ
echo [3/3] Pushing to GitHub...
git push origin main

echo ========================================
echo   Sync Complete! Your link will update soon (1-2 mins).
echo   URL: https://sugiitr.github.io/ea-labo/
echo ========================================
pause
