@!/bin/bash
echo > accounts
printf "how many emails do you want to create?"
read n

touch countemail
for ((i=1; i<=n; i++)) {
printf 'testaccount%d@healthagent.com\n' $i >> accounts
}
cat accounts