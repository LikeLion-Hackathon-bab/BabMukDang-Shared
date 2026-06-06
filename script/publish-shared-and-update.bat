@echo off
setlocal

REM 이 배치 파일은 BabMukDang\Babmukdang-Shared\script 안에서 실행한다고 가정합니다.
REM 폴더 구조:
REM BabMukDang
REM ├─ Babmukdang-Shared
REM │  └─ script
REM │     └─ publish-shared-and-update.bat
REM ├─ Babmukdang-Backend
REM └─ Babmukdang-Client

set SCRIPT_DIR=%~dp0
set ROOT=%SCRIPT_DIR%..\..
set SHARED=%ROOT%\Babmukdang-Shared
set BACKEND=%ROOT%\Babmukdang-Backend
set CLIENT=%ROOT%\Babmukdang-Client
set PACKAGE=@kimdaegyu/babmukdang-shared

echo.
echo [1/3] Publishing shared package...
echo Repository: %SHARED%
cd /d "%SHARED%" || goto :error

call npm version patch || goto :error
call npm run build || goto :error
call npm publish --access public || goto :error

echo.
echo [2/3] Updating shared package in backend...
echo Repository: %BACKEND%
cd /d "%BACKEND%" || goto :error

call npm update %PACKAGE% || goto :error

echo.
echo [3/3] Updating shared package in client...
echo Repository: %CLIENT%
cd /d "%CLIENT%" || goto :error

call npm update %PACKAGE% || goto :error

echo.
echo Done.
echo Shared package was published and updated in Backend and Client.
echo.
pause
exit /b 0

:error
echo.
echo ERROR: Command failed.
echo Current directory: %CD%
echo.
pause
exit /b 1