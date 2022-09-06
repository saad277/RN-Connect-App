import React from "react";
import { View, StyleSheet } from "react-native";

import { AppColors } from "../../style";

import { APP_ROUTES } from "../../routes";
import { Header } from "../../components/Header";
import { Text } from "../../components/Text";
import { Button } from "../../components/Button";

const ActivateDevice = (props) => {
    const { navigation } = props;

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
                    Activate your device
                </Text>

                <Text
                    size={14}
                    color={AppColors.PrimaryBlue}
                    topSpacing={45}
                    horizontalSpacing={30}
                    bottomSpacing={10}
                >
                    Before connecting please activate your device by clicking it once.
                </Text>

                <Text size={14} color={AppColors.PrimaryBlue} horizontalSpacing={30}>
                    A green light will appear to confirm you that it started.
                </Text>
            </View>

            <View style={styles.circle} />

            <Button
                text="Got it!"
                containerStyles={styles.btn}
                onPress={() => navigation.replace(APP_ROUTES.CONNECT)}
            />
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
        alignSelf: "center",
        marginTop: 50
    },
    btn: {
        marginHorizontal: 30,
        marginBottom: 20
    }
});

export default ActivateDevice;
