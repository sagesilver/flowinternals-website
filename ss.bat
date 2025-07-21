@echo off
echo Stopping any existing server on port 8080...

REM Find and kill any process using port 8080
for /f "tokens=5" %%a in ('netstat -aon ^| findstr :8080') do (
    echo Killing process %%a
    taskkill /f /pid %%a >nul 2>&1
)

echo Starting fresh server on localhost:8080...
cd flowinternals-website
npm run dev 