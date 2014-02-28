#!/bin/sh
directory="`dirname \"$0\"`"
cd "$directory"
cd ..
vagrant reload --provision