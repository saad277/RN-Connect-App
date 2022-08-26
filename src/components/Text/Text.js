import React from "react";
import { Text as NativeText } from "react-native";

import { AppColors } from "../../style";

const Text = (props) => {
    const { style = {}, size = 16, color = AppColors.Black, children } = props;

    return <NativeText style={{ fontSize: size, ...style }}>{children}</NativeText>;
};

export default Text;
