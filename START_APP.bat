@echo off
REM ============================================================
REM  Impressionism Studio — One-click starter for Windows
REM  Double-click this file to launch the app
REM ============================================================

echo.
echo  Impressionism Studio is starting...
echo.

REM Check Node.js
node --version >nul 2>&1
if errorlevel 1 (
  echo  ERROR: Node.js is not installed.
  echo.
  echo  Please go to https://nodejs.org and download
  echo  the LTS version, install it, then run this again.
  echo.
  pause
  exit /b 1
)

echo  Installing packages (only needed the first time)...
call npm install --silent

echo.
echo  ----------------------------------------
echo   Open your browser and go to:
echo   http://localhost:5173
echo  ----------------------------------------
echo.
echo   Press Ctrl+C to stop the app.
echo.

call npm run dev
pause
