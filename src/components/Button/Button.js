import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";

import { AppColors } from "../../style";

import { Text } from "../Text";

const Button = (props) => {
    const {
        isLoading = false,
        text = "Submit",
        onPress = () => {},
        disabled = false,
        fontSize = 18,
        containerStyles = {}
    } = props;

    return (
        <TouchableOpacity
            style={[styles.container, containerStyles]}
            activeOpacity={0.8}
            onPress={onPress}
            disabled={isLoading || disabled}
        >
            <Text color={AppColors.White} size={fontSize}>
                {text}
            </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 46,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 4,
        backgroundColor: AppColors.PrimaryBlue,
        shadowColor: AppColors.Black,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    }
});

export default Button;
