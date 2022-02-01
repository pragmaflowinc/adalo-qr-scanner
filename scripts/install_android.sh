#!/bin/bash
set -e
set -x

# Dependencies
yarn add react-native-vision-camera
yarn add react-native-permissions
yarn add vision-camera-qrcode-scanner

#build.gradle
echo "configured Android settings"