CURRENT=`pwd`
BASENAME=`basename "$CURRENT"`
notify-send "start browser-sync and css preprocessors for $BASENAME" -i "/home/sysoev84l/Изображения/sticker/svg/html5.svg"
#gnome-terminal --tab -e "/bin/bash -c 'cd $CURRENT; ./css.sh'" --tab -e "/bin/bash -c 'cd $CURRENT; ./bs.sh'"
gnome-terminal --tab -- './css.sh'
gnome-terminal --tab -- './bs.sh'