#!/bin/bash

APP_NAME=$(awk '/"name"/ {print $2; exit}' app.json | sed -e 's/[",]//g')

PROJECT_VERSION_FILE="src/config/app.js"
PROJECT_VERSION_SEARCHTERM="version"
PROJECT_VERSION_ENV_FILE=".env"
PROJECT_VERSION_ENV_FILE_DEV=".env.development"
PROJECT_VERSION_ENV_FILE_PROD=".env.production"
PROJECT_VERSION_ENV_SEARCHTERM="APP_VERSION"
IOS_INFO_PLIST_VERSION_FILE="ios/$APP_NAME/info.plist"
IOS_INFO_PLIST_VERSION_SEARCHTERM="CFBundleShortVersionString"
IOS_INFO_PLIST_VERSION_SEARCHTERM_2LINE="<\/string>"
ANDROID_BUID_GRADLE_VERSION_FILE="android/app/build.gradle"
ANDROID_BUID_GRADLE_VERSION_SEARCHTERM="versionName"
ANDROID_BUID_GRADLE_VERSION_CODE_FILE="android/app/build.gradle"
ANDROID_BUID_GRADLE_VERSION_CODE_SEARCHTERM="versionCode"
NPM_VERSION_FILE="package.json"
NPM_VERSION_SEARCHTERM="version"

get_version_string() {
    echo "$1" | sed -e 's/[^0-9\.]//g'
}
remove_newlines() {
    echo "$1" | sed -e ':a' -e 'N' -e '$!ba' -e 's/\n//g'
}
get_version() {
    file=$1
    searchTerm=$2
    lineWithVersion=$(awk "/$searchTerm/ {print \$1,\$2; exit}" "$file")
    echo $(get_version_string "$lineWithVersion")
}
get_version_within_plist() {
    file=$1
    searchTermFirstLine=$2
    searchTermSecondLine=$3
    lineWithVersion=$(remove_newlines "$(sed -n "/$searchTermFirstLine/,/$searchTermSecondLine/p" $file)")
    echo $(get_version_string "$lineWithVersion")
}

PROJECT_VERSION=$(get_version $PROJECT_VERSION_FILE $PROJECT_VERSION_SEARCHTERM)
PROJECT_VERSION_ENV=$(get_version $PROJECT_VERSION_ENV_FILE $PROJECT_VERSION_ENV_SEARCHTERM)
PROJECT_VERSION_ENV_DEV=$(get_version $PROJECT_VERSION_ENV_FILE_DEV $PROJECT_VERSION_ENV_SEARCHTERM)
PROJECT_VERSION_ENV_PROD=$(get_version $PROJECT_VERSION_ENV_FILE_PROD $PROJECT_VERSION_ENV_SEARCHTERM)
IOS_INFO_PLIST_VERSION=$(get_version_within_plist $IOS_INFO_PLIST_VERSION_FILE $IOS_INFO_PLIST_VERSION_SEARCHTERM $IOS_INFO_PLIST_VERSION_SEARCHTERM_2LINE)
ANDROID_BUILD_GRADLE_VERSION=$(get_version $ANDROID_BUID_GRADLE_VERSION_FILE $ANDROID_BUID_GRADLE_VERSION_SEARCHTERM)
ANDROID_BUILD_GRADLE_VERSION_CODE=$(get_version $ANDROID_BUID_GRADLE_VERSION_CODE_FILE $ANDROID_BUID_GRADLE_VERSION_CODE_SEARCHTERM)
NPM_VERSION=$(get_version $NPM_VERSION_FILE $NPM_VERSION_SEARCHTERM)

ERROR=false

show_usage() {
    echo "USAGE: version.sh [TARGET] [version] [versionCode]"
    echo "  version.sh  ->  to check versions"
    echo "  version.sh --project 3.2.1 ->  bump to version 3.2.1 ONLY FOR PROJECT ($PROJECT_VERSION_FILE)"
    echo "  version.sh --env 3.2.1 ->  bump to version 3.2.1 ONLY FOR PROJECT ($PROJECT_VERSION_ENV_FILE)"
    echo "  version.sh --env-dev 3.2.1 ->  bump to version 3.2.1 ONLY FOR PROJECT ($PROJECT_VERSION_ENV_FILE_DEV)"
    echo "  version.sh --env-prod 3.2.1 ->  bump to version 3.2.1 ONLY FOR PROJECT ($PROJECT_VERSION_ENV_FILE_PROD)"
    echo "  version.sh --ios 3.2.1 ->  bump to version 3.2.1 ONLY FOR IOS"
    echo "  version.sh --android 3.2.1 45 ->  bump to version 3.2.1 and versionCode 45 ONLY FOR ANDROID"
    echo "  version.sh --npm 3.2.1 ->  bump to version 3.2.1 ONLY NPM ($NPM_VERSION_FILE)"
    echo "  version.sh 3.2.1 45  ->  bump to version 3.2.1 and versionCode 45 FOR PROJECT, IOS & ANDROID (and NPM)"
}

check_version_pattern() {
    ERROR_TEMP=false
    [[ "$1" =~ ^[0-9]+(\.[0-9]+)*$ ]] || ERROR_TEMP=true
    $ERROR_TEMP && echo "$1 is not a valid version number (regex: /^[0-9]+(\.[0-9]+)*$/ )"
    [[ $ERROR_TEMP = true ]] && ERROR=true
}
check_version_code_pattern() {
    ERROR_TEMP=false
    [[ "$1" =~ ^[0-9]+$ ]] || ERROR_TEMP=true
    $ERROR_TEMP && echo "$1 is not a valid 'code version' (must be an integer)"
    [[ $ERROR_TEMP = true ]] && ERROR=true
}
get_line_number() {
    file="$1"
    searchTerm="$2"
    echo $(grep -n "$searchTerm" "$file") | sed -e 's/[^0-9].*$//g'
}
version_string_to_regex() {
    echo "$1" | sed -e 's/\./\\./g'
}

show_start_delimiter() {
    echo '---------------'
    echo ' '
}
show_end_delimiter() {
    echo ' '
    echo '---------------'
}


check_version() {
    echo "checking file app.json"
    echo "checking file $PROJECT_VERSION_FILE"
    echo "checking file $PROJECT_VERSION_ENV_FILE"
    echo "checking file $PROJECT_VERSION_ENV_FILE_DEV"
    echo "checking file $PROJECT_VERSION_ENV_FILE_PROD"
    echo "checking file $IOS_INFO_PLIST_VERSION_FILE"
    echo "checking file $ANDROID_BUID_GRADLE_VERSION_FILE"
    echo "checking file $NPM_VERSION_FILE"
    echo " "
    echo "VERSIONS of $APP_NAME:"
    echo " "
    echo "  project ($PROJECT_VERSION_FILE): $PROJECT_VERSION"
    echo "  project ($PROJECT_VERSION_ENV_FILE): $PROJECT_VERSION_ENV"
    echo "  project ($PROJECT_VERSION_ENV_FILE_DEV): $PROJECT_VERSION_ENV_DEV"
    echo "  project ($PROJECT_VERSION_ENV_FILE_PROD): $PROJECT_VERSION_ENV_PROD"
    echo "  iOS: $IOS_INFO_PLIST_VERSION"
    echo "  Android: $ANDROID_BUILD_GRADLE_VERSION (code $ANDROID_BUILD_GRADLE_VERSION_CODE)"
    echo "  npm: $NPM_VERSION"

    return 0
}

bump_version() {
    FILE="$1"
    SEARCH_TERM="$2"
    OLD_VERSION="$3"
    VERSION="$4"
    NEXT_LINE=${5:-false}

    ERROR=false
    line=$(get_line_number $FILE $SEARCH_TERM)
    if $NEXT_LINE ; then
        line=$((line+1))
    fi
    OLD_VERSION_REGEX=$(version_string_to_regex "$OLD_VERSION")
    sed -i '' -e "${line}s/$OLD_VERSION_REGEX/$VERSION/" $FILE || ERROR=true
    if $ERROR ; then
        echo "  ERROR!"
    else
        echo "  $FILE  :  '$OLD_VERSION'  ->  '$VERSION'"
    fi
}

bump_project_version() {
    VERSION=$1
    echo "BUMPING PROJECT VERSION:"
    bump_version $PROJECT_VERSION_FILE $PROJECT_VERSION_SEARCHTERM $PROJECT_VERSION $VERSION
}
bump_project_version_env() {
    VERSION=$1
    echo "BUMPING PROJECT VERSION ($PROJECT_VERSION_ENV_FILE):"
    bump_version $PROJECT_VERSION_ENV_FILE $PROJECT_VERSION_ENV_SEARCHTERM $PROJECT_VERSION_ENV $VERSION
}
bump_project_version_env_dev() {
    VERSION=$1
    echo "BUMPING PROJECT VERSION ($PROJECT_VERSION_ENV_FILE_DEV):"
    bump_version $PROJECT_VERSION_ENV_FILE_DEV $PROJECT_VERSION_ENV_SEARCHTERM $PROJECT_VERSION_ENV_DEV $VERSION
}
bump_project_version_env_prod() {
    VERSION=$1
    echo "BUMPING PROJECT VERSION ($PROJECT_VERSION_ENV_FILE_PROD):"
    bump_version $PROJECT_VERSION_ENV_FILE_PROD $PROJECT_VERSION_ENV_SEARCHTERM $PROJECT_VERSION_ENV_PROD $VERSION
}
bump_ios_version() {
    VERSION=$1
    echo "BUMPING IOS VERSION:"
    NEXT_LINE=true
    bump_version $IOS_INFO_PLIST_VERSION_FILE $IOS_INFO_PLIST_VERSION_SEARCHTERM $IOS_INFO_PLIST_VERSION $VERSION $NEXT_LINE
}
bump_android_version() {
    echo "BUMPING ANDROID VERSION:"
    bump_version $ANDROID_BUID_GRADLE_VERSION_FILE $ANDROID_BUID_GRADLE_VERSION_SEARCHTERM $ANDROID_BUILD_GRADLE_VERSION $1
    bump_version $ANDROID_BUID_GRADLE_VERSION_CODE_FILE $ANDROID_BUID_GRADLE_VERSION_CODE_SEARCHTERM $ANDROID_BUILD_GRADLE_VERSION_CODE $2
}
bump_npm_version() {
    VERSION=$1
    echo "BUMPING NPM VERSION:"
    bump_version $NPM_VERSION_FILE $NPM_VERSION_SEARCHTERM $NPM_VERSION $VERSION
}

if [ "$#" = 0 ]; then
    show_start_delimiter
    check_version
    show_end_delimiter
elif [ "$#" = 2 ] && [ "$1" = "--project" ]; then
    show_start_delimiter
    check_version_pattern $2
    [[ $ERROR = false ]] && bump_project_version "$2"
    show_end_delimiter
elif [ "$#" = 2 ] && [ "$1" = "--env" ]; then
    show_start_delimiter
    check_version_pattern $2
    [[ $ERROR = false ]] && bump_project_version_env "$2"
    show_end_delimiter
elif [ "$#" = 2 ] && [ "$1" = "--env-dev" ]; then
    show_start_delimiter
    check_version_pattern $2
    [[ $ERROR = false ]] && bump_project_version_env_dev "$2"
    show_end_delimiter
elif [ "$#" = 2 ] && [ "$1" = "--env-prod" ]; then
    show_start_delimiter
    check_version_pattern $2
    [[ $ERROR = false ]] && bump_project_version_env_prod "$2"
    show_end_delimiter
elif [ "$#" = 2 ] && [ "$1" = "--ios" ]; then
    show_start_delimiter
    check_version_pattern $2
    [[ $ERROR = false ]] && bump_ios_version "$2"
    show_end_delimiter
elif [ "$#" = 3 ] && [ "$1" = "--android" ]; then
    show_start_delimiter
    check_version_pattern $2
    check_version_code_pattern $3
    [[ $ERROR = false ]] && bump_android_version "$2" "$3"
    show_end_delimiter
elif [ "$#" = 2 ] && [ "$1" = "--npm" ]; then
    show_start_delimiter
    check_version_pattern $2
    [[ $ERROR = false ]] && bump_npm_version "$2"
    show_end_delimiter
elif [ "$#" = 2 ] && [[ "$1" != -* ]]; then
    show_start_delimiter
    check_version_pattern $1
    check_version_code_pattern $2
    if [ $ERROR = false ]; then
        bump_project_version "$1"
        bump_project_version_env "$1"
        bump_project_version_env_dev "$1"
        bump_project_version_env_prod "$1"
        bump_ios_version "$1"
        bump_android_version "$1" "$2"
        bump_npm_version "$1"
    fi
    show_end_delimiter
else
    show_start_delimiter
    show_usage
    show_end_delimiter
fi

$ERROR && exit 1 || exit 0
