import React from "react";
import { View, StyleSheet } from "react-native";

import { AppColors } from "../../style";

import { Header } from "../../components/Header";
import { Text } from "../../components/Text";
import { Button } from "../../components/Button";

const Connect = () => {
    return (
        <View style={styles.container}>
            <View>
                <Header title="Connect" />

                <Text
                    size={19}
                    color={AppColors.DarkBlue}
                    topSpacing={45}
                    horizontalSpacing={30}
                    bottomSpacing={5}
                >
                    How to connect?
                </Text>

                <Text
                    size={14}
                    color={AppColors.PrimaryBlue}
                    topSpacing={45}
                    leftSpacing={30}
                    bottomSpacing={10}
                >
                    Your device in already activated.In order to establish a connection
                </Text>

                <Text size={14} color={AppColors.PrimaryBlue} leftSpacing={30} bottomSpacing={10}>
                    you need to place your device near your phone with Bluetooh turned on.
                </Text>

                <Text size={14} color={AppColors.PrimaryBlue} leftSpacing={30} bottomSpacing={10}>
                    You need to place your device near your phone with Bluetooh turned on.
                </Text>

                <Text size={14} color={AppColors.PrimaryBlue} leftSpacing={30}>
                    Finally you must select a device. A blue light will signal that the device and
                    mobile are connected.
                </Text>
            </View>

            <View style={styles.circle} />

            <Button text="Connect" containerStyles={styles.btn} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between"
    },
    circle: {
        width: 120,
        height: 120,
        borderRadius: 120 / 2,
        backgroundColor: AppColors.LightBlue,
        alignSelf: "center"
    },
    btn: {
        marginHorizontal: 30,
        marginBottom: 20
    }
});

export default Connect;
