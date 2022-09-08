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
                    alignSelf: "center",
                    borderRadius: 9
                }}
            />
            <View
                style={{
                    position: "absolute",
                    width: "2%",
                    height: "100%",
                    backgroundColor: AppColors.LightBlue,
                    alignSelf: "flex-end",
                    borderRadius: 9,
                    zIndex: 1
                }}
            ></View>
            <View
                style={{
                    position: "absolute",
                    width: "2%",
                    height: "100%",
                    backgroundColor: AppColors.LightBlue,
                    alignSelf: "flex-start",
                    borderRadius: 9,
                    zIndex: 1
                }}
            ></View>
            <BarGraph
                data={[12,13,22,17,21,8,6]}
                labels={["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]}
                width={Dimensions.get("window").width - 40}
                height={Dimensions.get("window").width / 2}
                barRadius={5}
                barColor={AppColors.DarkBlue}
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

