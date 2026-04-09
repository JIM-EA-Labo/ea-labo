@echo off
chcp 65001 >nul
title EA Labo Launcher

:: =========================================================
:: EA Labo ランチャー
:: - node server.js をバックグラウンドで起動
:: - ブラウザで GitHub Pages を自動オープン
:: =========================================================

set PORT=3747
set URL=https://jim-ea-labo.github.io/ea-labo/
set SERVER_DIR=%~dp0

:: --- ポート 3747 が既に使用中か確認（二重起動防止） ---
netstat -ano | findstr ":%PORT% " | findstr "LISTENING" >nul 2>&1
if %errorlevel% == 0 (
    echo [OK] server.js は既に起動中です ^(port %PORT%^)
    goto OPEN_BROWSER
)

:: --- Node.js の存在確認 ---
where node >nul 2>&1
if %errorlevel% neq 0 (
    echo [ERROR] Node.js が見つかりません。
    echo         https://nodejs.org からインストールしてください。
    pause
    exit /b 1
)

:: --- server.js をバックグラウンドで起動（ウィンドウ最小化） ---
echo [起動中] node server.js を起動しています...
start "EA-Labo-Server" /min cmd /c "cd /d "%SERVER_DIR%" && node server.js"

:: --- 起動完了を最大5秒待つ ---
set /a WAIT=0
:WAIT_LOOP
timeout /t 1 /nobreak >nul
netstat -ano | findstr ":%PORT% " | findstr "LISTENING" >nul 2>&1
if %errorlevel% == 0 goto SERVER_READY
set /a WAIT+=1
if %WAIT% lss 5 goto WAIT_LOOP

echo [WARN] サーバーの起動確認がタイムアウトしました。ブラウザを開きます。
goto OPEN_BROWSER

:SERVER_READY
echo [OK] サーバー起動完了 ^(port %PORT%^)

:OPEN_BROWSER
echo [開く] %URL%
start "" "%URL%"

:: --- このウィンドウは自動で閉じる ---
timeout /t 2 /nobreak >nul
exit /b 0
