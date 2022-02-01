import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  useCameraDevices,
  useFrameProcessor,
} from "react-native-vision-camera";
import { Camera } from "react-native-vision-camera";
import { scanQRCodes } from "vision-camera-qrcode-scanner";

function QrCodeScanner(props) {
  const [hasPermission, setHasPermission] = React.useState(false);
  const [qrCodes, setQrCodes] = React.useState([]);
  const devices = useCameraDevices();
  const device = devices.back;

  React.useEffect(() => {
    (async () => {
      const status = await Camera.requestCameraPermission();
      setHasPermission(status === "authorized");
    })();
  }, []);

  useEffect(() => {
    
  }, [qrCodes])

  const frameProcessor = useFrameProcessor((frame) => {
    "worklet";
    const qrcode = scanQRCodes(frame);
    runOnJS(setQrCodes)(qrcode);
  }, []);
  if (device != null && hasPermission) {
    return (
      <>
        <Camera
          style={StyleSheet.absoluteFill}
          device={device}
          isActive={true}
          frameProcessor={frameProcessor}
          frameProcessorFps={5}
        />
        {qrCodes.map((qrcode, idx) => (
          <Text key={idx} style={styles.qrCodeTextURL}>
            {qrcode.url}
          </Text>
        ))}
      </>
    );
  }
  return <Text>Something went wrong</Text>;
}

const styles = StyleSheet.create({
  qrCodeTextURL: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
});

export default QrCodeScanner;
