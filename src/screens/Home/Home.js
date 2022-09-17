import React, { useState } from "react";
import { View, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity, Image } from "react-native";

import { AppColors } from "../../style";

import { APP_ROUTES } from "../../routes";
import { Text } from "../../components/Text";
import { Icon } from "../../components/Icon";
import { ProgressCircle } from "../../components/ProgressCircle";
import Filter, { FILTERS } from "./Filter";
import DateFilter from "./DateFilter";
import MainGraph from "./MainGraph";
import DailyGraph from "./DailyGraph";
import WeeklyGraph from "./WeeklyGraph";

const AVERAGE_TEXT = {
    [FILTERS.DAILY]: "Avg. usage per time period",
    [FILTERS.WEEKLY]: "Avg. ",
    [FILTERS.MONTHLY]: ""
};

const GraphData = {
    [FILTERS.DAILY]: {
        data: [20, 45, 28, 80, 99, 43, 50],
        labels: ["01", "02", "03", "04", "05", "06", "07"],
        subLabels: ["Jun", "Jun", "Jun", "Jun", "Jun", "Jun", "Jun"]
    },
    [FILTERS.WEEKLY]: {
        data: [15, 30, 40, 24, 16, 23, 32],
        labels: ["02-09", "09-16", "16-32", "23-30", "30-70", "21-28", "28-04"],
        subLabels: ["Jun", "Jun", "Jun", "Jun", "Jun", "Jun", "Jun"]
    },
    [FILTERS.MONTHLY]: {
        data: [31, 42, 11, 55, 62, 4, 20],
        labels: ["13 aug", "12 sep", "03 nov", "04 jan", "21 mar", "06 may", "07 july"],
        subLabels: ["-12 sep", "-13 oct", "-07 dec", "-16 feb", "-13 apr", "-09 jun", "-15 aug"]
    }
};

const RenderDailyGraph = () => {
    return (
        <MainGraph
            data={GraphData[FILTERS.DAILY].data}
            labels={GraphData[FILTERS.DAILY].labels}
            subLabels={GraphData[FILTERS.DAILY].subLabels}
        />
    );
};

const RenderWeeklyGraph = () => {
    return (
        <MainGraph
            data={GraphData[FILTERS.WEEKLY].data}
            labels={GraphData[FILTERS.WEEKLY].labels}
            subLabels={GraphData[FILTERS.WEEKLY].subLabels}
        />
    );
};

const RenderMonthlyGraph = () => {
    return (
        <MainGraph
            data={GraphData[FILTERS.MONTHLY].data}
            labels={GraphData[FILTERS.MONTHLY].labels}
            subLabels={GraphData[FILTERS.MONTHLY].subLabels}
        />
    );
};

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

const Emoji = (props) => {
    const { source, left } = props;

    return (
        <TouchableOpacity style={{ position: "absolute", top: -23, left }}>
            <Image
                source={source}
                style={{
                    width: 20,
                    height: 20
                }}
            />
        </TouchableOpacity>
    );
};

const Home = (props) => {
    const { navigation } = props;
    const [selected, setSelected] = useState(FILTERS.DAILY);

    return (
        <SafeAreaView>
            <ScrollView
                keyboardShouldPersistTaps="handled"
                bounces={false}
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.navigate(APP_ROUTES.PROFILE)}>
                        <Icon
                            source={require("../../assets/avatar.png")}
                            width={24}
                            height={24}
                            style={{ borderRadius: 24 / 2 }}
                        />
                    </TouchableOpacity>

                    <Text color={AppColors.PrimaryBlue} size={17}>
                        {selected === FILTERS.DAILY ? "AIR4ME" : "FLAIR"}
                    </Text>
                    <TouchableOpacity
                        onPress={() => navigation.navigate(APP_ROUTES.ACTIVATE_DEVICE)}
                    >
                        <Icon
                            source={require("../../assets/icons/add.png")}
                            width={24}
                            height={24}
                            style={{ borderRadius: 24 / 2 }}
                        />
                    </TouchableOpacity>
                </View>
                <Filter style={styles.filters} selected={selected} setSelected={setSelected} />

                <DateFilter secondDate={selected === FILTERS.MONTHLY} />

                {selected === FILTERS.DAILY && RenderDailyGraph()}
                {selected === FILTERS.WEEKLY && RenderWeeklyGraph()}
                {selected === FILTERS.MONTHLY && RenderMonthlyGraph()}

                <View style={{ position: "relative" }}>
                    <Emoji source={require("../../assets/icons/meh.png")} left={"8%"} />
                    <Emoji source={require("../../assets/icons/sad.png")} left={"21%"} />
                    <Emoji source={require("../../assets/icons/smile.png")} left={"34%"} />
                    <Emoji source={require("../../assets/icons/happy.png")} left={"47%"} />
                    <Emoji source={require("../../assets/icons/smile.png")} left={"60%"} />
                    <Emoji source={require("../../assets/icons/shocked.png")} left={"73%"} />
                    <Emoji source={require("../../assets/icons/add.png")} left={"86%"} />
                </View>

                <Text color={AppColors.PrimaryBlue} leftSpacing={20} topSpacing={20}>
                    RESCUE
                </Text>

                <View style={styles.average}>
                    <View style={{ flexDirection: "row" }}>
                        <Image
                            source={require("../../assets/icons/inhaler.png")}
                            style={{ width: 26, height: 26, alignSelf: "center", marginLeft: 15 }}
                        />

                        <View style={{ marginLeft: 15 }}>
                            <Text color={AppColors.DarkBlue} size={15}>
                                Average Usage
                            </Text>
                            <Text color={AppColors.DarkBlue} size={11}>
                                (based on last 10 days)
                            </Text>
                        </View>
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
                            justifyContent: "space-between",
                            marginLeft: 10
                        }}
                    >
                        <PeriodItem />
                        <View>
                            <View style={styles.line} />
                            <Text
                                color={
                                    selected === FILTERS.WEEKLY
                                        ? AppColors.Red
                                        : AppColors.PrimaryGreen
                                }
                            >
                                {selected === FILTERS.WEEKLY ? "+8,8%" : "-7,37%"}
                            </Text>
                            <View style={styles.line} />
                        </View>
                        <PeriodItem />
                    </View>
                </View>

                <View
                    style={{
                        backgroundColor: AppColors.LightBlue,
                        marginHorizontal: 20,
                        marginBottom: 4,
                        paddingBottom: 10
                    }}
                >
                    <Text color={AppColors.DarkBlue} topSpacing={14} leftSpacing={14}>
                        Avg. usage per time period
                    </Text>

                    <DailyGraph />
                </View>
                {selected !== FILTERS.DAILY && (
                    <View
                        style={{
                            backgroundColor: AppColors.LightBlue,
                            marginHorizontal: 20,
                            marginBottom: 4,
                            paddingBottom: 10
                        }}
                    >
                        <Text color={AppColors.DarkBlue} topSpacing={14} leftSpacing={14}>
                            Avg. usage per day
                        </Text>

                        <WeeklyGraph />
                    </View>
                )}

                {selected !== FILTERS.DAILY && (
                    <View
                        style={{
                            backgroundColor: AppColors.LightBlue,
                            marginHorizontal: 20,
                            marginBottom: 4,
                            paddingBottom: 17,
                            justifyContent: "space-between",
                            flexDirection: "row",
                            borderBottomLeftRadius: 9,
                            borderBottomRightRadius: 9
                        }}
                    >
                        <Text color={AppColors.DarkBlue} topSpacing={17} leftSpacing={14}>
                            Days without usage
                        </Text>
                        <View
                            style={{
                                backgroundColor: "#fff",
                                marginTop: 14,
                                padding: 8,
                                marginRight: 14,
                                borderRadius: 9
                            }}
                        >
                            <Text color={AppColors.DarkBlue} size={18}>
                                4/30
                            </Text>
                        </View>
                    </View>
                )}

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

                <View style={styles.seretide}>
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center"
                        }}
                    >
                        <Text color={AppColors.DarkBlue}>Seretide GSK</Text>
                        <View style={styles.dot} />
                    </View>
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                            marginTop: 10
                        }}
                    >
                        <Text color={AppColors.DarkBlue}>Seretide GSK</Text>
                        <View style={styles.dot} />
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
        paddingLeft: 19,
        paddingBottom: 12
    },
    seretide: {
        backgroundColor: AppColors.LightBlue,
        marginHorizontal: 20,
        marginBottom: 4,
        borderBottomLeftRadius: 9,
        borderBottomRightRadius: 9,
        paddingHorizontal: 19,
        paddingBottom: 12,
        paddingTop: 20
    },
    dot: {
        backgroundColor: AppColors.PrimaryGreen,
        width: 14,
        height: 14,
        borderRadius: 14 / 2
    }
});

export default Home;
