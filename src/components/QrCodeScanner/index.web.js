import React, { Component } from "react";
import QrReader from "react-qr-scanner";
import QRCodeScannerLogo from "./logo.png";

class QrCodeScanner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      delay: 100,
      result: "No result",
    };

    this.handleScan = this.handleScan.bind(this);
    this.handleError = this.handleError.bind(this);
  }
  handleScan(data) {
      if (this.props.useActions && data) {
          debugger
          this.props.useActions(data.text, data.rawBytes)
      }
  }
  handleError(err) {
    console.error(err);
  }
  render() {
    let realStyles = {
      container: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        width: "100%",
        backgroundColor: "#051523",
      },
      image: {
        height: 200,
        width: 200,
      },
    };
    if (this.props.displayInEditorMode || !this.props.editor) {
      debugger
        return (
          <div style={realStyles.container}>
            <QrReader
              facingMode={ this.props.cameraType === "front" ? "user" : "environment" }
              delay={this.state.delay}
              style={{ width: this.props._width, height: this.props._height }}
              onError={this.handleError}
              onScan={this.handleScan}
            />
          </div>
        );
    }
    return (
        <div style={realStyles.container}>
            <img style={realStyles.image} src={QRCodeScannerLogo} />
        </div>
    )
  }
}

export default QrCodeScanner;
