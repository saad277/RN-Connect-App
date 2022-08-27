import React from "react";
import { Text as NativeText, StyleSheet } from "react-native";
import PropTypes from "prop-types";

import { AppColors } from "../../style";

const Text = (props) => {
    const {
        style = {},
        size = 16,
        color = AppColors.Black,
        children,
        leftSpacing = 0,
        rightSpacing = 0,
        topSpacing = 0,
        bottomSpacing = 0,
        letterSpacing = 0,
        centered = undefined,
        end = undefined
    } = props;

    return (
        <NativeText
            style={{
                fontSize: size,
                color,
                ...(!!leftSpacing && { marginLeft: leftSpacing }),
                ...(!!rightSpacing && { marginRight: rightSpacing }),
                ...(!!topSpacing && { marginTop: topSpacing }),
                ...(!!bottomSpacing && { marginBottom: bottomSpacing }),
                ...(!!letterSpacing && { letterSpacing }),
                ...(centered && styles.centered),
                ...(end && styles.end),
                ...style
            }}
        >
            {children}
        </NativeText>
    );
};

const styles = StyleSheet.create({
    centered: {
        textAlign: "center"
    },
    alignEnd: {
        alignSelf: "flex-end"
    },
    right: {
        textAlign: "right"
    },

    underlined: {
        textDecorationLine: "underline"
    }
});

Text.PropTypes = {
    size: PropTypes.number
};

export default Text;
