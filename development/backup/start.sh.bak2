#!/bin/bash

# read options
while getopts ":u:p:" opt; do
  case $opt in
    u)
      echo "URL set to $OPTARG" >&2
      url="$OPTARG"
      ;;
    p)
      echo "PASSWORD set to $OPTARG" >&2
      password="$OPTARG"
      ;;
    \?)
      echo "Invalid option: -$OPTARG" >&2
      ;;
    :)
      echo "Option -$OPTARG requires an argument." >&2
      exit 1
      ;;
  esac
done

if [ -o -z "$url" -o -z "$password" ]; then
    echo "Usage: ./start.sh -u <HTTP://URL> -p <PASSWORD>"
    exit
fi

# populate Drones
declare -a Drones=()
while read line; do Drones=("${Drones[@]}" "$line"); done < drones

# copy all files to the Drones
for i in "${Drones[@]}"
do
   echo -e "$i"
   ssh -t $i hostname
   scp healthagent_signup_to_logout.js $i:/root/healthagent_signup_to_logout.js
   scp healthagent_immortalCasper.sh $i:/root/healthagent_immortalCasper.sh
   ssh -t $i find / | grep healthagent_immortalCasper.sh
   scp accounts $i:/root
   ssh -t $i chmod +x /root/healthagent_immortalCasper.sh
   ssh -t $i ls -ltrha /root/healthagent_immortalCasper.sh
done



# run casper in all drones
for i in "${Drones[@]}"
do
   ssh $i "nohup /root/healthagent_immortalCasper.sh -u $url -p $password > /dev/null 2>&1 & "
   echo Started the immortal Casper on $i
done
