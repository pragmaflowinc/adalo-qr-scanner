#!/bin/bash
set -e
set -x

# Dependencies
yarn add react-native-camera@4.2.1
yarn add react-native-qrcode-scanner
yarn add react-native-permissions

# Podfile
cd ios

if grep -q "Permission-Camera" Podfile
then  
echo "Permission-Camera already supported, nothing to do here"
else
sed -i.bak '/RNCPushNotificationIOS/a\
\  pod "Permission-Camera", :path => "#{permissions_path}/Camera/Permission-Camera.podspec"
' Podfile
fi

if grep -q "permissions_path =" Podfile
then  
echo "permissions_path already supported, nothing to do here"
else
sed -i.bak '/RNCPushNotificationIOS/a\
\  permissions_path = "../node_modules/react-native-permissions/ios"
' Podfile
fi

pod install && cd ..

echo "configured iOS settings"