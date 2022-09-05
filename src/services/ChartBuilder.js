import React from "react";
import { Platform } from "react-native";
import { Line, Text, G } from "react-native-svg";

export default class ChartBuilder {
    constructor({
        data,
        labels,
        subLabels = [],
        startAtZero = true,
        height,
        width,
        hasXAxisLabels = true,
        hasYAxisLabels = true,
        xAxisLabelCount,
        xAxisLabelStyle,
        yAxisLabelStyle,
        hasXAxisBackgroundLines = true,
        hasYAxisBackgroundLines = true,
        xAxisBackgroundLineStyle = {
            strokeWidth: 1,
            color: "#000000"
        },
        yAxisBackgroundLineStyle = {
            strokeWidth: 1,
            color: "#000000"
        }
    }) {
        this.X_AXIS_LABEL_WIDTH = 50;
        this.Y_AXIS_LABEL_HEIGHT = 50;
        this.data = data;
        this.labels = labels || [...new Array(this.data.length)].map((_, i) => i.toString());
        this.sublabels = subLabels;
        this.startAtZero = startAtZero;
        this.height = height;
        this.width = width;
        (this.hasXAxisLabels = hasXAxisLabels), (this.hasYAxisLabels = hasYAxisLabels);
        this.xAxisLabelStyle = xAxisLabelStyle;
        this.yAxisLabelStyle = yAxisLabelStyle;
        this.hasXAxisBackgroundLines = hasXAxisBackgroundLines;
        this.hasYAxisBackgroundLines = hasYAxisBackgroundLines;
        this.yAxisBackgroundLineStyle = yAxisBackgroundLineStyle;
        this.xAxisBackgroundLineStyle = xAxisBackgroundLineStyle;
        this.xAxisLabelCount = xAxisLabelCount === undefined ? 4 : xAxisLabelCount;
        this.maxVal = Math.max(...this.data);
        this.minVal = Math.min(...this.data);
        this.xAxisLabelWidth = hasXAxisLabels ? this.X_AXIS_LABEL_WIDTH : 0;
        this.xAxisLabelPosition = "left";
        this.leftAlignedXAxisLabelWidth = hasXAxisLabels ? this.X_AXIS_LABEL_WIDTH : 0;
        this.yAxisLabelHeight = hasYAxisLabels ? this.Y_AXIS_LABEL_HEIGHT : 0;
        if (this.yAxisLabelStyle) {
            this.yAxisLabelHeight = this.yAxisLabelStyle.height || this.yAxisLabelHeight;
        }
        this.yDistanceBetweenXLabels = (height - this.yAxisLabelHeight) / this.xAxisLabelCount;
        if (this.xAxisLabelStyle) {
            this.xAxisLabelWidth = this.xAxisLabelStyle.width || this.xAxisLabelWidth;
            this.xAxisLabelPosition = this.xAxisLabelStyle.position || this.xAxisLabelPosition;
            this.leftAlignedXAxisLabelWidth =
                this.xAxisLabelPosition === "left" ? this.xAxisLabelWidth : 0;
        }
        this.yLabelSlotWidth = (this.width - this.xAxisLabelWidth) / this.data.length;
        this.deltaBetweenGreatestAndLeast = this.startAtZero
            ? Math.max(...this.data) || 1
            : Math.max(...this.data) - Math.min(...this.data) || 1;
        if (this.minVal >= 0 && this.maxVal >= 0) {
            this.baseHeight = height;
        } else if (this.minVal < 0 && this.maxVal > 0) {
            this.baseHeight = (height * this.maxVal) / this.deltaBetweenGreatestAndLeast;
        } else {
            this.baseHeight = 0;
        }
    }
    calcDataPointHeight(val) {
        const max = Math.max(...this.data);
        if (this.startAtZero) {
            return (this.height - this.yAxisLabelHeight) * (val / this.maxVal);
        } else if (this.minVal >= 0 && max >= 0) {
            return (
                (this.height - this.yAxisLabelHeight) *
                ((val - this.minVal) / this.deltaBetweenGreatestAndLeast)
            );
        } else {
            return this.height * ((val - max) / this.deltaBetweenGreatestAndLeast);
        }
    }
    renderXAxisLines() {
        let color = "#000";
        let strokeWidth = 0.5;
        if (this.xAxisBackgroundLineStyle) {
            color = this.xAxisBackgroundLineStyle.color || color;
            strokeWidth = this.xAxisBackgroundLineStyle.strokeWidth || strokeWidth;
        }
        return [...new Array((this.xAxisLabelCount || 4) + 1)].map((_, i) => {
            return (
                <Line
                    key={Math.random()}
                    x1={this.leftAlignedXAxisLabelWidth}
                    x2={this.width - (this.leftAlignedXAxisLabelWidth ? 0 : this.xAxisLabelWidth)}
                    y1={this.yDistanceBetweenXLabels * i}
                    y2={this.yDistanceBetweenXLabels * i}
                    stroke={color}
                    strokeWidth={strokeWidth}
                />
            );
        });
    }
    renderYAxisLines() {
        let color = "#000";
        let strokeWidth = 0.5;
        if (this.yAxisBackgroundLineStyle) {
            color = this.yAxisBackgroundLineStyle.color || color;
            strokeWidth = this.yAxisBackgroundLineStyle.strokeWidth || strokeWidth;
        }
        return [...new Array(Math.ceil(this.data.length))].map((_, i) => {
            return (
                <Line
                    key={Math.random()}
                    x1={
                        i * this.yLabelSlotWidth +
                        this.yLabelSlotWidth / 2 +
                        this.leftAlignedXAxisLabelWidth
                    }
                    x2={
                        i * this.yLabelSlotWidth +
                        this.yLabelSlotWidth / 2 +
                        this.leftAlignedXAxisLabelWidth
                    }
                    y1={0}
                    y2={this.baseHeight}
                    stroke={color}
                    strokeDasharray={"5, 10"}
                    strokeWidth={strokeWidth}
                />
            );
        });
    }
    renderXAxisLabels() {
        let xOffset = 0;
        let yOffset = 0;
        let rotation = 0;
        let fontFamily = Platform.OS === "ios" ? "Avenir Next" : "Roboto";
        let fontSize = 14;
        let fontWeight = 500;
        let color = "#000000";
        let prefix = "";
        let suffix = "";
        let decimals = 0;
        if (this.xAxisLabelStyle) {
            xOffset = this.xAxisLabelStyle.xOffset || xOffset;
            yOffset = this.xAxisLabelStyle.yOffset || yOffset;
            rotation = this.xAxisLabelStyle.rotation || rotation;
            fontFamily = this.xAxisLabelStyle.fontFamily || fontFamily;
            fontSize = this.xAxisLabelStyle.fontSize || fontSize;
            fontWeight = this.xAxisLabelStyle.fontWeight || fontWeight;
            color = this.xAxisLabelStyle.color || color;
            prefix = this.xAxisLabelStyle.prefix || prefix;
            suffix = this.xAxisLabelStyle.suffix || suffix;
            decimals = this.xAxisLabelStyle.decimals || decimals;
        }
        return [...new Array(this.xAxisLabelCount + 1)].map((_, i) => {
            const label =
                prefix +
                (
                    (this.deltaBetweenGreatestAndLeast / this.xAxisLabelCount) *
                        Math.abs(i - this.xAxisLabelCount - 1) +
                    (this.startAtZero ? 0 : Math.min(...this.data))
                )
                    .toFixed(decimals)
                    .toString() +
                suffix;
            const x =
                (this.xAxisLabelPosition === "right" ? this.width - this.xAxisLabelWidth : 0) +
                xOffset +
                (fontSize * label.length) / 2;
            const y =
                this.yDistanceBetweenXLabels * i -
                this.yDistanceBetweenXLabels +
                fontSize +
                yOffset;
            return (
                <Text
                    key={Math.random()}
                    origin={`${x}, ${y}`}
                    x={x}
                    y={y}
                    rotation={rotation}
                    textAnchor="middle"
                    fontFamily={fontFamily}
                    fontSize={fontSize}
                    fontWeight={fontWeight}
                    fill={color}
                >
                    {label}
                </Text>
            );
        });
    }
    renderYAxisLabels() {
        let xOffset = 0;
        let yOffset = 0;
        let rotation = 0;
        let fontFamily = Platform.OS === "ios" ? "Avenir Next" : "Roboto";
        let fontSize = 14;
        let fontWeight = 500;
        let color = "#000000";
        let position = "bottom";
        if (this.yAxisLabelStyle) {
            xOffset = this.yAxisLabelStyle.xOffset || xOffset;
            yOffset = this.yAxisLabelStyle.yOffset || yOffset;
            rotation = this.yAxisLabelStyle.rotation || rotation;
            fontFamily = this.yAxisLabelStyle.fontFamily || fontFamily;
            fontSize = this.yAxisLabelStyle.fontSize || fontSize;
            fontWeight = this.yAxisLabelStyle.fontWeight || fontWeight;
            color = this.yAxisLabelStyle.color || color;
            position = this.yAxisLabelStyle.position || position;
        }
        return this.labels.map((label, i) => {
            const x =
                i * this.yLabelSlotWidth +
                this.yLabelSlotWidth / 2 +
                xOffset +
                this.leftAlignedXAxisLabelWidth;
            const y = this.baseHeight - fontSize + yOffset;
            return (
                <G key={Math.random()}>
                    <Text
                        origin={`${x}, ${y}`}
                        x={x}
                        y={y}
                        rotation={rotation}
                        textAnchor={"middle"}
                        fontFamily={fontFamily}
                        fontSize={fontSize}
                        fontWeight={fontWeight}
                        fill={color}
                    >
                        {label}
                    </Text>
                    {!!this.sublabels[i] && (
                        <Text
                            origin={`${x}, ${y}`}
                            x={x}
                            y={y + 20}
                            rotation={rotation}
                            textAnchor={"middle"}
                            fontFamily={fontFamily}
                            fontSize={fontSize}
                            fontWeight={fontWeight}
                            fill={color}
                        >
                            {this.sublabels[i]}
                        </Text>
                    )}
                </G>
            );
        });
    }
}

