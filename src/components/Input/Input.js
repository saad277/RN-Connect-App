import React from "react";
import { View, TextInput, StyleSheet, Image } from "react-native";

import { Text } from "../Text";

import { AppColors } from "../../style";

const Input = (props) => {
    const {
        value = "",
        icon = null,
        placeholder = "",
        label = "",
        error = "",
        containerStyles = {},
        inputStyles = {},
        wrapperStyles = {},
        onChange = () => {},
        secureText = false,
        ...rest
    } = props;

    return (
        <View style={containerStyles}>
            <View style={[styles.wrapper]}>
                <Text bottomSpacing={0} size={14} leftSpacing={5} color={AppColors.PrimaryBlue}>
                    {label}
                </Text>
                <View style={[styles.container, wrapperStyles]}>
                    <TextInput
                        style={[styles.input, inputStyles]}
                        placeholder={placeholder}
                        placeholderTextColor={AppColors.PrimaryGray}
                        onChangeText={onChange}
                        value={value}
                        secureTextEntry={secureText}
                        {...rest}
                    />

                    {!!icon && <Image source={icon} style={styles.icon} resizeMode="contain" />}
                </View>
            </View>
            {Boolean(error) && <Text style={styles.error}>{error}</Text>}
        </View>
    );
};

export default Input;

const styles = StyleSheet.create({
    wrapper: {
        borderRadius: 8,
        borderBottomWidth: 1.4,
        borderColor: "lightgray"
    },
    container: {
        flexDirection: "row",
        alignItems: "center",
        paddingRight: 23
    },
    input: {
        fontSize: 16,
        flex: 1,
        height: 40,
        color: AppColors.Black
    },
    error: {
        color: AppColors.Red,
        fontSize: 11
    },
    icon: {
        width: 14,
        height: 14,
        tintColor: AppColors.PrimaryGray
    }
});
