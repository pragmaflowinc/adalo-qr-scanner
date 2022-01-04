#!/bin/bash
set -e
set -x

# Dependencies
yarn add react-native-camera@4.2.1
yarn add react-native-qrcode-scanner
yarn add react-native-permissions

#build.gradle

sed -i.bak '/defaultConfig {/a\
\     missingDimensionStrategy "react-native-camera", "general"
' android/app/build.gradle

rm -rf node_modules/qr-code-scanner/node_modules

echo "configured Android settings"