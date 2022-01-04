import React, { Component } from "react";
import { View } from "react-native";
import QRCodeScanner from "react-native-qrcode-scanner";
import { RNCamera } from "react-native-camera";

class QrCodeScanner extends Component {
  state = {
    width: null,
  };

  //This function performs the determined action when the QR code is scanned and passes two arguments containing important data from the QR code.
  onReadQRCode = async (value) => {
    const { useActions } = this.props;

    //data and rawData are properties of the object that is generated when scanning the QR.
    const dataObteinedFromTheQRCodeScan = value.data;
    const rawDataObteinedFromTheQRCodeScan = value.rawData;

    if (useActions)
      await useActions(
        dataObteinedFromTheQRCodeScan,
        rawDataObteinedFromTheQRCodeScan
      );
  };

  handleLayout = ({ nativeEvent }) => {
    const { width } = (nativeEvent && nativeEvent.layout) || {};
    const { width: prevWidth } = this.state;
    if (width !== prevWidth) {
      this.setState({ width });
    }
  };

  render() {
    const { _height } = this.props;

    const containerStyles = {
      height: _height,
      width: this.state.width,
    };

    return (
      <View onLayout={this.handleLayout}>
        {this.state.width && (
          <QRCodeScanner
            onRead={this.onReadQRCode}
            flashMode={RNCamera.Constants.FlashMode.off}
            containerStyle={containerStyles}
            cameraStyle={containerStyles}
          />
        )}
      </View>
    );
  }
}

export default QrCodeScanner;
