import React, { useState } from "react";
import { View, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity, Image } from "react-native";

import { AppColors } from "../../style";

import { APP_ROUTES } from "../../routes";
import { Text } from "../../components/Text";
import { Icon } from "../../components/Icon";
import { Modal } from "../../components/Modal";
import { ProgressCircle } from "../../components/ProgressCircle";
import { formatDate } from "../../utils/dateUtils";
import Filter, { FILTERS } from "./Filter";
import DateFilter, { monthNames } from "./DateFilter";
import MainGraph from "./MainGraph";
import DailyGraph from "./DailyGraph";
import WeeklyGraph from "./WeeklyGraph";

const PeriodItem = ({ val = 113 }) => {
    return (
        <View>
            <View style={styles.number}>
                <Text color={AppColors.DarkBlue} size={28}>
                    {val}
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
    const [feelingModal, setFeelingModal] = useState(false);
    const [drugModal, setDrugModal] = useState(false);
    const [date, setDate] = useState(new Date("2022-06-01"));

    function formatDay(val = 0) {
        let incDate = date.getDate() + val;

        let lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

        if (incDate > lastDay) {
            return "";
        }

        return formatDate(incDate);
    }

    const GraphData = {
        [FILTERS.DAILY]: {
            data: [20, 45, 28, 80, 99, 43, 50],
            labels: [
                formatDay(),
                formatDay(1),
                formatDay(2),
                formatDay(3),
                formatDay(4),
                formatDay(5),
                formatDay(6)
            ],
            subLabels: [
                monthNames[date.getMonth()].slice(0, 3),
                monthNames[date.getMonth()].slice(0, 3),
                monthNames[date.getMonth()].slice(0, 3),
                monthNames[date.getMonth()].slice(0, 3),
                monthNames[date.getMonth()].slice(0, 3),
                monthNames[date.getMonth()].slice(0, 3),
                monthNames[date.getMonth()].slice(0, 3)
            ]
        },
        [FILTERS.WEEKLY]: {
            data: [15, 30, 40, 24, 16, 23, 32],
            labels: [
                formatDay(),
                formatDay(1),
                formatDay(2),
                formatDay(3),
                formatDay(4),
                formatDay(5),
                formatDay(6)
            ],
            subLabels: [
                monthNames[date.getMonth()].slice(0, 3),
                monthNames[date.getMonth()].slice(0, 3),
                monthNames[date.getMonth()].slice(0, 3),
                monthNames[date.getMonth()].slice(0, 3),
                monthNames[date.getMonth()].slice(0, 3),
                monthNames[date.getMonth()].slice(0, 3),
                monthNames[date.getMonth()].slice(0, 3)
            ]
        },
        [FILTERS.MONTHLY]: {
            data: [31, 42, 11, 55, 62, 4, 20],
            labels: [
                `${formatDay()} ${monthNames[date.getMonth()].slice(0, 3)}`,
                `${formatDay(1)}  ${monthNames[date.getMonth()].slice(0, 3)}`,
                `${formatDay(2)}  ${monthNames[date.getMonth()].slice(0, 3)}`,
                `${formatDay(3)}  ${monthNames[date.getMonth()].slice(0, 3)}`,
                `${formatDay(4)}  ${monthNames[date.getMonth()].slice(0, 3)}`,
                `${formatDay(5)}  ${monthNames[date.getMonth()].slice(0, 3)}`,
                `${formatDay(6)}  ${monthNames[date.getMonth()].slice(0, 3)}`
            ],
            subLabels: [
                `-${formatDay(1)} ${
                    formatDay(1) && monthNames[date.getMonth() + 1].slice(0, 3).toLowerCase()
                }`,
                `-${formatDay(2)} ${
                    formatDay(2) && monthNames[date.getMonth() + 1].slice(0, 3).toLowerCase()
                }`,
                `-${formatDay(3)} ${
                    formatDay(3) && monthNames[date.getMonth() + 1].slice(0, 3).toLowerCase()
                }`,
                `-${formatDay(4)} ${
                    formatDay(4) && monthNames[date.getMonth() + 1].slice(0, 3).toLowerCase()
                }`,
                `-${formatDay(5)} ${
                    formatDay(5) && monthNames[date.getMonth() + 1].slice(0, 3).toLowerCase()
                }`,
                `-${formatDay(6)} ${
                    formatDay(6) && monthNames[date.getMonth() + 1].slice(0, 3).toLowerCase()
                }`,
                `-${formatDay(7)} ${
                    formatDay(7) && monthNames[date.getMonth() + 1].slice(0, 3).toLowerCase()
                }`
            ]
        }
    };

    return (
        <SafeAreaView>
            <ScrollView
                keyboardShouldPersistTaps="handled"
                bounces={false}
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => setFeelingModal(true)}>
                        <Icon
                            source={require("../../assets/icons/smile.png")}
                            width={24}
                            height={24}
                            style={{ borderRadius: 24 / 2 }}
                            color={AppColors.PrimaryBlue}
                        />
                    </TouchableOpacity>

                    <Text color={AppColors.PrimaryBlue} size={17}>
                        {selected === FILTERS.DAILY ? "AIR4ME" : "FLAIR"}
                    </Text>
                    <TouchableOpacity onPress={() => setDrugModal(true)}>
                        <Icon
                            source={require("../../assets/icons/inhaler-blue.png")}
                            width={27}
                            height={27}
                        />
                    </TouchableOpacity>
                </View>
                <Filter style={styles.filters} selected={selected} setSelected={setSelected} />

                <DateFilter
                    secondDate={selected === FILTERS.MONTHLY}
                    date={date}
                    setDate={setDate}
                />
                <MainGraph
                    data={GraphData[selected].data}
                    labels={GraphData[selected].labels}
                    subLabels={GraphData[selected].subLabels}
                />

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
                                {selected === FILTERS.DAILY && "(based on last 10 days)"}
                                {selected === FILTERS.WEEKLY && "(based on last 10 weeks)"}
                                {selected === FILTERS.MONTHLY && "(based on last 10 months)"}
                            </Text>
                        </View>
                    </View>
                    <Text color={AppColors.DarkBlue} size={24}>
                        {selected === FILTERS.DAILY && "3.5"}
                        {selected === FILTERS.WEEKLY && "25.2"}
                        {selected === FILTERS.MONTHLY && "105.4"}
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
                        <PeriodItem
                            val={
                                selected === FILTERS.DAILY
                                    ? 2
                                    : selected === FILTERS.WEEKLY
                                    ? 26
                                    : 113
                            }
                        />
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
                        <PeriodItem
                            val={
                                selected === FILTERS.DAILY
                                    ? 4
                                    : selected === FILTERS.WEEKLY
                                    ? 22
                                    : 122
                            }
                        />
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
                        {(selected === FILTERS.DAILY || selected === FILTERS.MONTHLY) &&
                            "Avg. usage per time period"}
                        {selected === FILTERS.WEEKLY && "Time repartition"}
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
                            {selected === FILTERS.MONTHLY && "Avg. usage per day"}
                            {selected === FILTERS.WEEKLY && "Avg. usage per day of the week"}
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
                                {selected === FILTERS.WEEKLY && "0/7"}
                                {selected === FILTERS.MONTHLY && "4/30"}
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
                            Adherence
                        </Text>
                        <Text
                            color={AppColors.DarkBlue}
                            size={24}
                            rightSpacing={20}
                            topSpacing={14}
                        >
                            87%
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
            <Modal isOpen={drugModal} onClose={() => setDrugModal(false)}>
                <View style={styles.modalOne}>
                    <View>
                        <View style={styles.rescue}>
                            <Text color={AppColors.White} size={14}>
                                Rescue Drugs
                            </Text>
                        </View>
                        <View style={styles.inhaler}>
                            <Icon
                                source={require("../../assets/icons/inhaler-blue.png")}
                                width={45}
                                height={45}
                                color={AppColors.White}
                            />
                        </View>
                    </View>

                    <View>
                        <View style={styles.rescue}>
                            <Text color={AppColors.White} size={14}>
                                Regular Drugs
                            </Text>
                        </View>
                        <View style={styles.inhaler}>
                            <Icon
                                source={require("../../assets/icons/inhaler-blue.png")}
                                width={45}
                                height={45}
                                color={AppColors.White}
                            />
                        </View>
                    </View>
                </View>
            </Modal>

            <Modal isOpen={feelingModal} onClose={() => setFeelingModal(false)}>
                <View style={{ justifyContent: "center", paddingTop: 80 }}>
                    <Text color={AppColors.White} size={21} centered>
                        How are you feeling?
                    </Text>
                    <View style={styles.feelingWrapper}>
                        <View>
                            <Icon
                                source={require("../../assets/icons/happy.png")}
                                width={43}
                                height={43}
                            />
                            <Text topSpacing={6} size={13} centered color="#42a344">
                                Great
                            </Text>
                        </View>

                        <View>
                            <Icon
                                source={require("../../assets/icons/smile.png")}
                                width={43}
                                height={43}
                            />
                            <Text topSpacing={6} size={13} centered color="#9be494">
                                Good
                            </Text>
                        </View>

                        <View>
                            <Icon
                                source={require("../../assets/icons/meh.png")}
                                width={43}
                                height={43}
                            />
                            <Text topSpacing={6} centered size={13} color="#1736a6">
                                Ok
                            </Text>
                        </View>
                        <View>
                            <Icon
                                source={require("../../assets/icons/sad.png")}
                                width={43}
                                height={43}
                            />
                            <Text topSpacing={6} centered size={13} color="#ff783c">
                                Anxious
                            </Text>
                        </View>
                        <View>
                            <Icon
                                source={require("../../assets/icons/shocked.png")}
                                width={43}
                                height={43}
                            />
                            <Text topSpacing={6} centered size={13} color="#ff4141">
                                Terrible
                            </Text>
                        </View>
                    </View>
                </View>
            </Modal>
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
    },
    modalOne: {
        justifyContent: "space-between",
        alignItems: "center",
        flex: 1,
        paddingVertical: 60
    },
    rescue: {
        backgroundColor: AppColors.Black,
        borderRadius: 8,
        padding: 12,
        width: 140,
        alignItems: "center"
    },
    inhaler: {
        alignSelf: "center",
        backgroundColor: AppColors.PrimaryBlue,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 90 / 2,
        padding: 10,
        marginTop: 10
    },
    feelingWrapper: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 80,
        marginHorizontal: 20
    }
});

export default Home;
