@echo off
title MCC Operation Dashboard - Dev Server
echo ==========================================
echo   MCC Operation Dashboard - Dev Server
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

echo Starting development server...
echo.
echo The dashboard will open in your browser automatically.
echo Press Ctrl+C to stop the server.
echo.

:: Open browser after a short delay (start in background)
start "" cmd /c "timeout /t 3 /nobreak >nul && start http://localhost:5173"

:: Start the dev server (this blocks until Ctrl+C)
call npx vite --host --port 5173
