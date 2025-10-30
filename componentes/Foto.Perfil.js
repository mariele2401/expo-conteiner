import React from "react";
import { Image } from "react-native";

export default function FotoPerfil({ url }) {
    return (
        <image
            souce={require('../img/base.jpg')}
            style={{ width: 100, height: 100, borderBottom: 10 }}
        />
    );
}