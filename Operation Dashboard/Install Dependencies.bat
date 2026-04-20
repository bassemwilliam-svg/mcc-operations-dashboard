@echo off
title MCC Operation Dashboard - Install Dependencies
echo ==========================================
echo   MCC Operation Dashboard - Install
echo ==========================================
echo.

cd /d "%~dp0"

:: Check if Node.js is installed
where node >nul 2>&1
if %ERRORLEVEL% NEQ 0 (
    echo [ERROR] Node.js is not installed or not in PATH!
    echo.
    echo Please install Node.js from: https://nodejs.org/
    echo After installing, restart this script.
    echo.
    pause
    exit /b 1
)

echo Node.js version:
call node --version
echo.
echo npm version:
call npm --version
echo.

echo Installing dependencies...
echo.

call npm install

if %ERRORLEVEL% NEQ 0 (
    echo.
    echo [ERROR] Installation failed! Check the error messages above.
    pause
    exit /b 1
)

echo.
echo ==========================================
echo   Dependencies installed successfully!
echo.
echo   Next steps:
echo   - "Start Dashboard (Dev Server).bat" for live development
echo   - "Build Dashboard.bat" to create production build
echo   - "Open Dashboard (Offline).bat" to open built version
echo ==========================================
echo.
pause
