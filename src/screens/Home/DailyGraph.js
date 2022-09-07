import React from "react";
import { Dimensions, View } from "react-native";
import { BarGraph } from "../../components/BarGraph";

import { AppColors } from "../../style";

const DailyGraph = () => {
    return (
        <View style={{ marginTop: 20, position: "relative" }}>
            <View
                style={{
                    position: "absolute",
                    width: "96%",
                    height: "96%",
                    backgroundColor: AppColors.White,
                    alignSelf:"center",
                    borderRadius:9
                }}
            />
            <BarGraph
                data={[10, 21, 34, 32]}
                labels={["00-06am", "6am-12pm", "12pm-18pm", "18pm-00"]}
                width={Dimensions.get("window").width - 35}
                height={Dimensions.get("window").width / 4}
                barRadius={5}
                barColor={AppColors.PrimaryBlue}
                barWidthPercentage={0.35}
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
                    alignSelf: "center"
                }}
            />
        </View>
    );
};

export default DailyGraph;

