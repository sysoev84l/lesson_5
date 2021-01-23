CURRENT=`pwd`
BASENAME=`basename "$CURRENT"`

#comment="lesson_5"
notify-send "git init and commit $BASENAME" -i "/home/sysoev84l/Изображения/git/GitHub-Mark/PNG/GitHub-Mark-120px-plus.png"
git init
git add .
git commit -m $BASENAME
git branch -M main
# git push -u origin main