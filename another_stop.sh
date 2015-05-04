#!/bin/bash

# populate Drones
declare -a Drones=()
while read line; do Drones=("${Drones[@]}" "$line"); done < drones

# kill the immortalCasper
for i in "${Drones[@]}"
do
   echo Show Immortal Casper(s)
   ssh $i "pid=\$(ps aux | grep 'healthagent_immortalCasper.sh' | awk '{print \$2}' | grep -v grep)"
   ssh $i "pid=\$(ps aux | grep 'healthagent_immortalCasper.sh' | awk '{print \$2}' | grep -v grep); echo \$pid |xargs kill"
   ssh $i "pid=\$(ps aux | grep 'healthagent_immortalCasper.sh' | awk '{print \$2}' | grep -v grep)"
   echo Stopped the immortal Casper on $i
   echo "#####################"
   ssh $i "pid=\$(ps aux | grep 'casperjs' | grep 'email' | awk '{print \$2}' | grep -v grep)"
   ssh $i "pid=\$(ps aux | grep 'casperjs' | grep 'email' | awk '{print \$2}' | grep -v grep); echo \$pid |xargs kill"
   ssh $i "pid=\$(ps aux | grep 'casperjs' | grep 'email' | awk '{print \$2}' | grep -v grep)"
   echo Stopping rogue Casperjs scripts on $i
done
