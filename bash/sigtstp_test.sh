#!/bin/bash
trap "echo 'I won'\''t go to sleep!'" SIGTSTP
trap "echo 'Nice try.'" SIGINT
echo "kill me from another shell with 'kill $$'"
echo "Beginning infinite loop..."
while true; do
    :
done
