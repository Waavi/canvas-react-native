#!/bin/bash

APP_NAME=$(awk '/"name"/ {print $2; exit}' app.json | sed -e 's/[",]//g')

FILE="node_modules/react-native/Libraries/react-native/react-native-implementation.js"
SEARCH_TERM="require('Settings')"
REPLACE_TERM="require('\.\.\/Settings\/Settings')"

get_line_number() {
    file="$1"
    searchTerm="$2"
    echo $(grep -n "$searchTerm" "$file") | sed -e 's/[^0-9].*$//g'
}

ERROR=false
line=$(get_line_number $FILE $SEARCH_TERM)
sed -i '' -e "${line}s/$SEARCH_TERM/$REPLACE_TERM/" $FILE || ERROR=true
if $ERROR ; then
    echo "  ERROR!"
else
    echo "  $FILE  :  '$SEARCH_TERM'  ->  '$REPLACE_TERM'"
fi
