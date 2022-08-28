import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";

import { AppColors } from "../../style";

import { Header } from "../../components/Header";
import { Text } from "../../components/Text";

const Card = () => {
    return (
        <View style={styles.card}>
            <Text
                color={AppColors.DarkBlue}
                size={14}
                topSpacing={20}
                leftSpacing={20}
                bottomSpacing={8}
            >
                For use with your:
            </Text>

            <View style={styles.wrapper}>
                <View>
                    <Text color={AppColors.DarkBlue} size={18} topSpacing={20} bottomSpacing={20}>
                        Rescue Medication
                    </Text>

                    <Text color={AppColors.DarkBlue} size={16} topSpacing={20} bottomSpacing={30}>
                        Device N.1
                    </Text>

                    <Text color={AppColors.PrimaryBlue} size={16} topSpacing={20} bottomSpacing={0}>
                        Status :
                    </Text>

                    <Text color={AppColors.DarkBlue} size={16} topSpacing={20} bottomSpacing={20}>
                        Paired
                    </Text>
                </View>

                <View style={styles.circle}></View>
            </View>
        </View>
    );
};

const MedicationType = () => {
    return (
        <ScrollView
            keyboardShouldPersistTaps="handled"
            bounces={false}
            showsVerticalScrollIndicator={false}
        >
            <View style={styles.container}>
                <Header title="Add device" />
                <Text
                    size={14}
                    color={AppColors.PrimaryBlue}
                    centered
                    topSpacing={15}
                    horizontalSpacing={30}
                    bottomSpacing={30}
                >
                    Please choose the type of medication that you want to monitor.
                </Text>

                <Card />
                <Card />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    card: {
        backgroundColor: AppColors.LightBlue,
        marginHorizontal: 20,
        borderRadius: 9,
        marginBottom: 27
    },
    circle: {
        width: 120,
        height: 120,
        borderRadius: 120 / 2,
        backgroundColor: AppColors.PrimaryBlue,
        alignSelf: "center"
    },
    wrapper: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 20
    }
});

export default MedicationType;
