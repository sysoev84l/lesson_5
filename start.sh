CURRENT=`pwd`
BASENAME=`basename "$CURRENT"`
gnome-terminal --tab -e "/bin/bash -c 'cd $CURRENT; ./css.sh'" --tab -e "/bin/bash -c 'cd $CURRENT; ./bs.sh'"