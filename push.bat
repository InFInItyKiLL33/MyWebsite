git add .
set /p msg=Enter your commit message: 
git commit -m "%msg%"
git push -u origin master
pause