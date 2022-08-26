import { Text as NativeText } from "react-native";

import { AppColors } from "../../style";

const Text = (props) => {
    const { style = {}, size = 16, color = AppColors.Black } = props;

    return <NativeText style={{ fontSize: size, color, ...style }} />;
};

export default Text;
