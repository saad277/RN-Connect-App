import React from "react";
import { Image } from "react-native";

const Icon = (props) => {
    const { width, height, source, color, style = {} } = props;
    return (
        <Image
            source={source}
            style={{ tintColor: color, width, height, ...style }}
            resizeMode="contain"
        />
    );
};

export default Icon;
