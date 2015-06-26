
#!/bin/bash

#################################################################################
#                         Created by: Dan Sweetnam                              #
#                         NutraSpace                                            #
#                         fix_HA.sh                                             #  
#                         Created on: May 22nd 2015                             #
#                         Last edited on:                                       #
#                         Version#1.0                                           #
#################################################################################

#General Script Variables
LOG_FILE1="/tmp/fix_HA.log"

#General Commands
rm -f $LOG_FILE1
touch $LOG_FILE1

#Bash Commands for setup and clean up


#Bash Script Begin
clear
sleep 1

sed -i "s/Hostname=Zabbix server/Hostname=$host/g" /etc/zabbix/zabbix_agentd.conf







mv /etc/yum.repos.d/Zabbix-2_4.repo /etc/yum.repos.d/Zabbix-2_4.repo.bak


echo -e "<---------------------------> \n"


