import React from "react";
import { TextInput, Animated, View, StyleSheet } from "react-native";
import Svg, { G, Circle, LinearGradient, Stop, Defs } from "react-native-svg";

import { AppColors } from "../../style";

const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);

const CircularProgress = (props) => {
    const {
        percentage = 0,
        radius = 70,
        strokeWidth = 15,
        color = AppColors.PrimaryGreen,
        max = 100,
        title = "-",
        text = "",
        textStyles = {},
        style = {}
    } = props;

    const circumference = 2 * Math.PI * radius;
    const halfCircle = radius + strokeWidth;

    const maxPerc = (100 * percentage) / max;
    const strokeDashoffset = circumference - (circumference * maxPerc) / 100;

    return (
        <View style={[styles.circleContainer(radius), style]}>
            <Svg
                height={radius * 2.3}
                width={radius * 2.3}
                viewBox={`0 0 ${halfCircle * 2} ${halfCircle * 2}`}
            >
                <Defs>
                    <LinearGradient id="grad">
                        <Stop offset="70%" stopColor={color} stopOpacity="1" />
                        <Stop offset="90%" stopColor={color} stopOpacity="0.9" />
                        <Stop offset="-50%" stopColor={color} />
                        <Stop offset="10%" stopColor={color} />
                    </LinearGradient>
                </Defs>

                <G rotation="-90" origin={`${halfCircle}, ${halfCircle}`}>
                    <Circle
                        cx="50%"
                        cy="50%"
                        r={radius}
                        fill="transparent"
                        stroke={"url(#grad)"}
                        //stroke={color}
                        strokeWidth={strokeWidth}
                        strokeLinecap="round"
                        strokeDashoffset={-strokeDashoffset}
                        strokeDasharray={circumference}
                    />
                    {/*In case extra stroke needed uncomment this  */}
                    <Circle
                        cx="50%"
                        cy="50%"
                        r={radius}
                        fill="transparent"
                        stroke={color}
                        strokeWidth={strokeWidth}
                        strokeLinejoin="round"
                        strokeOpacity=".1"
                    />
                </G>
            </Svg>

            <AnimatedTextInput
                underlineColorAndroid="transparent"
                editable={false}
                defaultValue={title}
                style={[styles.title(color, radius / 4.5)]}
            />

            <AnimatedTextInput
                underlineColorAndroid="transparent"
                editable={false}
                defaultValue={text}
                style={[styles.text, textStyles]}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    title: (textColor, size) => ({
        ...StyleSheet.absoluteFillObject,
        color: textColor,
        marginBottom: 30,
        fontSize: size,
        textAlign: "center"
    }),
    text: {
        ...StyleSheet.absoluteFillObject,
        textAlign: "center",
        fontSize: 12,
        color: "black",
        marginTop: 30
    },
    circleContainer: (radius) => ({
        width: radius * 2.1,
        height: radius * 2.1,
        alignItems: "center",
        justifyContent: "center"
    })
});

export default CircularProgress;
