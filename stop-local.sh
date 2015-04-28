#!/bin/bash
kill $(ps aux | grep 'healthagent_immortalCasper' | awk '{print $2}')
