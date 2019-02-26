#!/usr/bin/env bash

echo "=============================================================================="
echo "Task         : Build Script"
echo "Description  : Run a shell script using bash, Generate a .env file"

ROUTE=".env.test"

#Colors
RED='\033[0;31m'
NC='\033[0m'

if [ -f "$ROUTE" ]
then
    cp "${ROUTE}" "./.env"
    echo "File origin  : ${ROUTE}"
else
    echo -e "File origin  : ${RED}${ROUTE} ${NC}  (Not found)"
fi

echo "=============================================================================="