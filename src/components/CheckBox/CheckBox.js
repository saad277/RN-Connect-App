import React from "react";
import { default as RNCheckBox } from "@react-native-community/checkbox";

import { AppColors } from "../../style";

const CheckBox = (props) => {
    const { value = "", onValueChange, style = {}, boxType = "square" } = props;

    return (
        <RNCheckBox
            value={value}
            tintColors={{ true: AppColors.PrimaryBlue }}
            onValueChange={onValueChange}
            style={style}
            boxType={boxType}
        />
    );
};

export default CheckBox;
