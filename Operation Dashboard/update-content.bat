@echo off
title MCC Operation Dashboard - Content Update
echo ==========================================
echo   MCC Operation Dashboard - Content Update
echo ==========================================
echo.
echo Use this after editing markdown files in content\docs\
echo or chatbot data in content\chatbot\dialog-tree.json
echo.

cd /d "%~dp0"

echo Rebuilding the dashboard...
echo.

call npm run build

if %ERRORLEVEL% NEQ 0 (
    echo.
    echo [ERROR] Build failed! Check the error messages above.
    pause
    exit /b 1
)

echo.
echo ==========================================
echo   Content updated and built successfully!
echo ==========================================
echo.
echo Opening the updated dashboard...
start "" "%~dp0dist\index.html"
echo.
timeout /t 3 /nobreak >nul
