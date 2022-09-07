import React from "react";
import { View } from "react-native";
import { Svg, Rect, G, Text } from "react-native-svg";
import ChartBuilder from "../../services/ChartBuilder";

const BarChart = ({
    data,
    labels,
    subLabels,
    height=0,
    extraHeight=0,
    width,
    barRadius = 0,
    barWidthPercentage = 0.7,
    barColor,
    style = {},
    baseConfig = {
        data,
        height,
        width
    }
}) => {
    const chartBuilder = new ChartBuilder({
        data,
        labels,
        height,
        width,
        subLabels,
        ...baseConfig
    });

    const baseHeight = height - chartBuilder.yAxisLabelHeight;
    const barWidth = chartBuilder.yLabelSlotWidth * barWidthPercentage;
    const slotGap = chartBuilder.yLabelSlotWidth - barWidth;
    const renderBars = () => {
        return data.map((val, i) => {
            const barHeight = chartBuilder.calcDataPointHeight(val);
            return (
                <G key={Math.random()}>
                    <Rect
                        x={
                            i * chartBuilder.yLabelSlotWidth +
                            slotGap / 2 +
                            chartBuilder.leftAlignedXAxisLabelWidth
                        }
                        y={baseHeight - barHeight}
                        rx={barRadius}
                        width={barWidth}
                        height={barHeight < 0 ? 0 : barHeight}
                        fill={barColor}
                    />
                    {/* <Text
                        x={
                            (i * chartBuilder.yLabelSlotWidth +
                            slotGap +
                            chartBuilder.leftAlignedXAxisLabelWidth)+8
                        }
                        y={(baseHeight - barHeight)-12}
                        textAnchor={"middle"}
                        fill={"#000"}
                    >
                        100%
                    </Text> */}
                </G>
            );
        });
    };
    return (
        <View style={style}>
            <Svg height={height + extraHeight} width={width}>
                <G>
                    {baseConfig.hasXAxisBackgroundLines !== false
                        ? chartBuilder.renderXAxisLines()
                        : null}
                </G>
                <G>
                    {baseConfig.hasXAxisLabels !== false ? chartBuilder.renderXAxisLabels() : null}
                </G>
                <G>
                    {baseConfig.hasYAxisLabels !== false ? chartBuilder.renderYAxisLabels() : null}
                </G>
                <G>{renderBars()}</G>
            </Svg>
        </View>
    );
};
export default BarChart;

