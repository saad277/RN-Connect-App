import React from "react";
import { Switch as RNSwitch } from "react-native";

import { AppColors } from "../../style";

const Switch = (props) => {
    const { onChange = () => {}, value } = props;
    return (
        <RNSwitch
            trackColor={{
                false: AppColors.PrimaryGray,
                true: AppColors.LightBlue
            }}
            thumbColor={AppColors.DarkBlue}
            value={value}
            onValueChange={onChange}
        />
    );
};

export default Switch;
