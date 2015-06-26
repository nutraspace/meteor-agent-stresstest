#!/bin/bash


# Starting Docker Status
   echo "#########Status of Docker Process on $i ##########"
   systemctl -l status docker | grep Active
   printf "\n"
   echo "####################################################"
   echo "      Show Docker mnt & Container info on $i"
   echo "####################################################"
   printf "\n"
   echo "Number of files in /var/lib/docker/devicemapper/mnt/"
   ls  /var/lib/docker/devicemapper/mnt/ | wc -l
   echo "Number of files in /var/lib/docker/containers/"
   ls  /var/lib/docker/containers | wc -l
   echo "#############"
   echo "Show how Dockerized Casper(s) stats running"
   docker stats `docker ps -qa`
   echo "#############"
   docker top `docker ps -qa`
   echo "#####END#####"
   printf "\n"

docker run --rm -it dsweetnam/casperjs casperjs /usr/local/bin/parties/healthagent_status.js 
