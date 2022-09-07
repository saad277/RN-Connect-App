import React from "react";
import { StyleSheet, Dimensions } from "react-native";
import { BarGraph } from "../../components/BarGraph";

import { AppColors } from "../../style";

const MainGraph = () => {
    return (
        <BarGraph
            data={[20, 45, 28, 80, 99, 43, 50]}
            labels={["01", "02", "03", "04", "05", "06", "07"]}
            subLabels={["Jun", "Jun", "Jun", "Jun", "Jun", "Jun", "Jun"]}
            width={Dimensions.get("window").width - 35}
            height={Dimensions.get("window").width / 7 + 215}
            barRadius={5}
            barColor={AppColors.DarkBlue}
            barWidthPercentage={0.65}
            baseConfig={{
                hasXAxisBackgroundLines: true,
                hasYAxisLabels: true,
                hasXAxisLabels: false,
                xAxisBackgroundLineStyle: {
                    strokeWidth: 0.8,
                    color: "#D3D3D3"
                }
            }}
            style={{
                paddingVertical: 10,
                alignSelf: "center",
                marginTop: 20
            }}
        />
    );
};

export default MainGraph;

