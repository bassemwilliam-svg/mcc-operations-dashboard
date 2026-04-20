@echo off
title MCC Operation Dashboard - Offline Mode
echo ==========================================
echo   MCC Operation Dashboard - Offline Mode
echo ==========================================
echo.

cd /d "%~dp0"

:: Check if dist folder exists
if not exist "dist\index.html" (
    echo [INFO] No build found. Building the dashboard first...
    echo.
    call npm run build
    if %ERRORLEVEL% NEQ 0 (
        echo.
        echo [ERROR] Build failed! Check the error messages above.
        pause
        exit /b 1
    )
    echo.
)

echo Opening dashboard in your default browser...
start "" "%~dp0dist\index.html"

echo.
echo Dashboard opened! You can close this window.
timeout /t 3 /nobreak >nul
