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

REM script 폴더 기준으로 두 단계 위가 BabMukDang 루트입니다.
for %%I in ("%SCRIPT_DIR%..\..") do set ROOT=%%~fI

for %%I in ("%ROOT%\Babmukdang-Shared") do set SHARED=%%~fI
for %%I in ("%ROOT%\Babmukdang-Backend") do set BACKEND=%%~fI
for %%I in ("%ROOT%\Babmukdang-Client") do set CLIENT=%%~fI

set PACKAGE=@kimdaegyu/babmukdang-shared

echo.
echo Root: %ROOT%
echo Backend: %BACKEND%
echo Client: %CLIENT%

echo.
echo [1/2] Installing latest shared package in backend...
echo Repository: %BACKEND%
cd /d "%BACKEND%" || goto :error

call npm install %PACKAGE%@latest --save-exact || goto :error

echo.
echo [2/2] Installing latest shared package in client...
echo Repository: %CLIENT%
cd /d "%CLIENT%" || goto :error

call npm install %PACKAGE%@latest --save-exact || goto :error

echo.
echo Done.
echo Shared package installed as latest in Backend and Client.
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