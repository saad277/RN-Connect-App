import React from "react";
import { View, StyleSheet, ScrollView, SafeAreaView } from "react-native";

import { AppColors } from "../../style";

import { Text } from "../../components/Text";
import { Icon } from "../../components/Icon";
import { ProgressCircle } from "../../components/ProgressCircle";
import Filter from "./Filter";

const PeriodItem = () => {
    return (
        <View>
            <View style={styles.number}>
                <Text color={AppColors.DarkBlue} size={28}>
                    113
                </Text>
            </View>
            <Text size={8} color={AppColors.DarkBlue} topSpacing={10} centered>
                12 May 2022 - 11 June 2022
            </Text>
        </View>
    );
};

const Home = () => {
    return (
        <SafeAreaView>
            <ScrollView
                keyboardShouldPersistTaps="handled"
                bounces={false}
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.header}>
                    <Icon
                        source={require("../../assets/avatar.png")}
                        width={24}
                        height={24}
                        style={{ borderRadius: 24 / 2 }}
                    />
                    <Text color={AppColors.PrimaryBlue} size={17}>
                        AIR4ME
                    </Text>
                    <View />
                </View>
                <Filter style={styles.filters} />

                <View style={styles.date}>
                    <Icon
                        source={require("../../assets/icons/left-arrow.png")}
                        width={14}
                        height={14}
                        style={{ marginRight: 10 }}
                        onPress={() => {}}
                    />
                    <Text>1. June 2022</Text>
                    <Icon
                        source={require("../../assets/icons/right-arrow.png")}
                        width={14}
                        height={14}
                        style={{ marginLeft: 10 }}
                        onPress={() => {}}
                    />
                </View>

                <Text color={AppColors.PrimaryBlue} leftSpacing={20} topSpacing={20}>
                    RESCUE
                </Text>

                <View style={styles.average}>
                    <View style={{ marginLeft: 15 }}>
                        <Text color={AppColors.DarkBlue} size={15}>
                            Average Usage
                        </Text>
                        <Text color={AppColors.DarkBlue} size={11}>
                            (based on last 10 days)
                        </Text>
                    </View>
                    <Text color={AppColors.DarkBlue} size={24}>
                        3.5
                    </Text>
                </View>

                <View style={styles.usage}>
                    <Text color={AppColors.DarkBlue} size={15} bottomSpacing={15}>
                        Usage compared to previous period
                    </Text>

                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-between"
                        }}
                    >
                        <PeriodItem />
                        <View>
                            <View style={styles.line} />
                            <Text color={AppColors.PrimaryGreen}>-7,37%</Text>
                            <View style={styles.line} />
                        </View>
                        <PeriodItem />
                    </View>
                </View>

                <View
                    style={{
                        backgroundColor: AppColors.LightBlue,
                        marginHorizontal: 20,
                        marginBottom: 4
                    }}
                >
                    <Text color={AppColors.DarkBlue} topSpacing={14} leftSpacing={14}>
                        Avg. usage per time period
                    </Text>
                </View>

                <Text color={AppColors.PrimaryBlue} leftSpacing={20} topSpacing={20}>
                    REGULARS
                </Text>
                <View style={styles.regulars}>
                    <ProgressCircle
                        percentage={70}
                        radius={25}
                        strokeWidth={6}
                        style={{ marginTop: 14 }}
                    />
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                            flex: 1
                        }}
                    >
                        <Text color={AppColors.DarkBlue} size={15} topSpacing={14} leftSpacing={14}>
                            Average Usage
                        </Text>
                        <Text
                            color={AppColors.DarkBlue}
                            size={24}
                            rightSpacing={20}
                            topSpacing={14}
                        >
                            3.5
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 25,
        paddingHorizontal: 20
    },
    filters: {
        marginTop: 20,
        marginHorizontal: 20,
        marginBottom: 30
    },
    date: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    average: {
        backgroundColor: AppColors.LightBlue,
        borderTopLeftRadius: 9,
        borderTopRightRadius: 9,
        marginHorizontal: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingRight: 20,
        paddingTop: 17,
        paddingBottom: 9,
        marginBottom: 4
    },
    usage: {
        backgroundColor: AppColors.LightBlue,
        marginHorizontal: 20,
        paddingTop: 10,
        paddingHorizontal: 10,
        paddingBottom: 24,
        marginBottom: 4
    },
    number: {
        backgroundColor: AppColors.White,
        borderRadius: 10,
        width: 100,
        height: 70,
        justifyContent: "center",
        alignItems: "center"
    },
    line: {
        backgroundColor: AppColors.White,
        width: 3,
        borderRadius: 9,
        height: 30,
        alignSelf: "center"
    },
    withoutUsage: {
        backgroundColor: AppColors.LightBlue,
        marginHorizontal: 20,
        marginBottom: 4,
        flexDirection: "row",
        justifyContent: "space-between",
        borderBottomLeftRadius: 9,
        borderBottomRightRadius: 9,
        alignItems: "center",
        marginBottom: 4
    },
    days: {
        backgroundColor: AppColors.White,
        borderRadius: 10,
        width: 60,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        marginRight: 20,
        marginVertical: 10
    },
    regulars: {
        backgroundColor: AppColors.LightBlue,
        marginHorizontal: 20,
        marginBottom: 4,
        borderTopLeftRadius: 9,
        borderTopRightRadius: 9,
        flexDirection: "row",
        paddingLeft: 14
    }
});

export default Home;
