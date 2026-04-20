@echo off
title MCC Operation Dashboard - Build
echo ==========================================
echo   MCC Operation Dashboard - Production Build
echo ==========================================
echo.

cd /d "%~dp0"

:: Check if node_modules exists
if not exist "node_modules" (
    echo [INFO] Installing dependencies first...
    echo.
    call npm install
    if %ERRORLEVEL% NEQ 0 (
        echo.
        echo [ERROR] npm install failed!
        pause
        exit /b 1
    )
    echo.
)

echo Building for production...
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
echo   Build complete!
echo.
echo   Output: dist\
echo   To view: double-click "Open Dashboard (Offline).bat"
echo ==========================================
echo.
pause
