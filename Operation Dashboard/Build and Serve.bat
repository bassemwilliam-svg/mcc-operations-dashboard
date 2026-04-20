@echo off
title MCC Operation Dashboard - Build ^& Serve
echo ==========================================
echo   MCC Operation Dashboard - Build ^& Serve
echo ==========================================
echo.
echo This builds the production version and serves
echo it locally (simulates how end-users will see it).
echo.

cd /d "%~dp0"

:: Check if node_modules exists
if not exist "node_modules" (
    echo [INFO] Installing dependencies first...
    call npm install
    if %ERRORLEVEL% NEQ 0 (
        echo [ERROR] npm install failed!
        pause
        exit /b 1
    )
    echo.
)

echo Building for production...
call npm run build
if %ERRORLEVEL% NEQ 0 (
    echo [ERROR] Build failed!
    pause
    exit /b 1
)

echo.
echo Starting preview server on http://localhost:4173 ...
echo Press Ctrl+C to stop.
echo.

:: Open browser after a short delay
start "" cmd /c "timeout /t 3 /nobreak >nul && start http://localhost:4173"

:: Serve the dist folder
call npx vite preview --host --port 4173
