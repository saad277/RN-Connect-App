import React from "react";
import { Image, TouchableOpacity } from "react-native";

const Icon = (props) => {
    const { width, height, source, color, style = {}, onPress = undefined } = props;

    const renderImage = () => (
        <Image
            source={source}
            style={{ tintColor: color, width, height, ...style }}
            resizeMode="contain"
        />
    );

    return onPress ? (
        <TouchableOpacity onPress={onPress}>{renderImage()}</TouchableOpacity>
    ) : (
        renderImage()
    );
};

export default Icon;
