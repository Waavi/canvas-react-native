#!/bin/bash
set -euo pipefail

SRC_FOLDER="src"
SEARCH_TERM=" from 'react-native-dotenv'"
# the timestamp (with pattern) that will be added to the file
TIMESTAMP_FORMAT="/* ___timestamp___$(date +"%F___%T")___ */"
# the equivalent converted to regex (it escapes the "/" and "*" characters)
TIMESTAMP_REGEX=$(echo "$TIMESTAMP_FORMAT" | sed 's/\//\\\//g' | sed 's/\*/\\*/g')
# the regex used to match for removing every previous timestamp
TIMESTAMP_REGEX_TO_MATCH=$(echo "$TIMESTAMP_REGEX" | sed 's/[0-9]/\./g')


# loops for every file that contains the SEARCH_TERM but this script
thisFileName="${0##*/}"
echo "REFRESHED TIMESTAMP FOR FILES:"
grep -rnwl "$SRC_FOLDER" -e "$SEARCH_TERM" | while read -r file ; do
    if [[ ! $file =~ $thisFileName ]]; then
        # gets the line within the file that contains the SEARCH_TERM
        line=$(grep -n "$SEARCH_TERM" "$file" | sed -e 's/[^0-9].*$//g')
        # removes any previous timestamp
        sed -i '' -e "${line}s/[[:space:]]*${TIMESTAMP_REGEX_TO_MATCH}[[:space:]]*//g" $file
        # adds the timestamp at the end of the line
        sed -i '' -e "${line}s/$/ ${TIMESTAMP_REGEX}/g" $file
        # prints the filename
        echo " -> $file"
    fi
done
