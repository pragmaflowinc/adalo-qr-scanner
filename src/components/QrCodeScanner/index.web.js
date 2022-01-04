import React, { Component } from "react";
import QRCodeScannerLogo from "./logo.png";


class QrCodeScanner extends Component {
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
                width: 200
            }
        };
        return (
            <div style={realStyles.container}>
                <img style={realStyles.image} src={QRCodeScannerLogo} />
            </div>
        )
    }
}

export default QrCodeScanner