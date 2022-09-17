import React, { useState } from "react";
import { View, StyleSheet } from "react-native";

import { Icon } from "../../components/Icon";
import { Text } from "../../components/Text";

const monthNames = [
    "Jan",
    "Feb",
    "March",
    "April",
    "May",
    "June",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
];

const DateFilter = (props) => {
    const { secondDate = false } = props;
    const [date, setDate] = useState(new Date("2022-06-01"));

    const handleDateIncrement = () => {
        const result = new Date(new Date(date).setDate(new Date(date).getDate() + 1));
        setDate(result);
    };
    const handleDateDecrement = () => {
        const result = new Date(new Date(date).setDate(new Date(date).getDate() - 1));
        setDate(result);
    };

    return (
        <View>
            <View style={styles.date}>
                <Icon
                    source={require("../../assets/icons/left-arrow.png")}
                    width={14}
                    height={14}
                    style={{ marginRight: 10 }}
                    onPress={handleDateDecrement}
                />
                <Text>
                    {date.getDate()}. {monthNames[date.getMonth()]} {date.getFullYear()}
                </Text>
                <Icon
                    source={require("../../assets/icons/right-arrow.png")}
                    width={14}
                    height={14}
                    style={{ marginLeft: 10 }}
                    onPress={handleDateIncrement}
                />
            </View>
            {secondDate && (
                <Text centered size={10}>
                    {date.getDate() + 1}. {monthNames[date.getMonth() + 1]} {date.getFullYear()}
                </Text>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    date: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    }
});

export default DateFilter;
