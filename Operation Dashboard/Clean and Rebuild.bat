@echo off
title MCC Operation Dashboard - Clean ^& Rebuild
echo ==========================================
echo   MCC Operation Dashboard - Clean Rebuild
echo ==========================================
echo.
echo This will delete node_modules, reinstall
echo everything, and do a fresh production build.
echo.

cd /d "%~dp0"

echo Cleaning old files...
if exist "node_modules" rmdir /s /q node_modules
if exist "dist" rmdir /s /q dist
echo Done.
echo.

echo Installing dependencies...
call npm install
if %ERRORLEVEL% NEQ 0 (
    echo [ERROR] npm install failed!
    pause
    exit /b 1
)
echo.

echo Building for production...
call npm run build
if %ERRORLEVEL% NEQ 0 (
    echo [ERROR] Build failed!
    pause
    exit /b 1
)

echo.
echo ==========================================
echo   Clean rebuild complete!
echo.
echo   Output: dist\
echo   Double-click "Open Dashboard (Offline).bat" to view.
echo ==========================================
echo.
pause
