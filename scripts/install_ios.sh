#!/bin/bash
set -e
set -x

name=$PROJECT_NAME

if grep -q "<key>NSContactsUsageDescription" ios/$name/Info.plist; then
  echo "Contacts already supported, nothing to do here."
else
  plutil -insert NSContactsUsageDescription -string 'Contacts permission when in use' ios/$name/Info.plist
fi

echo "configured iOS settings"