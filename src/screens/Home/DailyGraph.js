import React from "react";
import { Dimensions, View, TouchableOpacity } from "react-native";

import { AppColors } from "../../style";

import { Text } from "../../components/Text";
import { BarGraph } from "../../components/BarGraph";

const RenderText = (props) => {
    const { text = "", left } = props;

    return (
        <TouchableOpacity style={{ position: "absolute", top: "20%", left, zIndex: 1 }}>
            <Text color={AppColors.DarkBlue}>{text}</Text>
        </TouchableOpacity>
    );
};

const DailyGraph = () => {
    return (
        <View style={{ marginTop: 20, position: "relative" }}>
            <RenderText text="27%" left={"9%"} />
            <RenderText text="35%" left={"33%"} />
            <RenderText text="89%" left={"58%"} />
            <RenderText text="63%" left={"83%"} />
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
                data={[10, 21, 34, 32]}
                labels={["00-06am", "6am-12pm", "12pm-18pm", "18pm-00"]}
                width={Dimensions.get("window").width - 40}
                height={Dimensions.get("window").width / 4}
                barRadius={5}
                barColor={AppColors.PrimaryBlue}
                barWidthPercentage={0.55}
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

