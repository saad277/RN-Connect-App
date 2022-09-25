import React from "react";
import { View, StyleSheet } from "react-native";

import { Icon } from "../../components/Icon";
import { Text } from "../../components/Text";
import { FILTERS } from "./Filter";

export const monthNames = [
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
    const { secondDate = false, date, setDate, filter } = props;

    const handleDateIncrement = () => {
        let val = filter === FILTERS.WEEKLY ? 7 : 1;
        const result = new Date(new Date(date).setDate(new Date(date).getDate() + val));
        setDate(result);
    };
    const handleDateDecrement = () => {
        let val = filter === FILTERS.WEEKLY ? 7 : 1;
        const result = new Date(new Date(date).setDate(new Date(date).getDate() - val));
        setDate(result);
    };

    const renderSecondDate = () => {
        let incDate = date.getDate() + 1;
        let lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

        if (incDate > lastDay) {
            return "";
        }

        return true;
    };

    return (
        <View>
            <View style={styles.date}>
                <Icon
                    source={require("../../assets/icons/left-arrow.png")}
                    width={14}
                    height={14}
                    style={{ marginRight: 2 }}
                    onPress={handleDateDecrement}
                />
                <Text>
                    {date.getDate()}. {monthNames[date.getMonth()]} {date.getFullYear()}
                </Text>
                <Icon
                    source={require("../../assets/icons/right-arrow.png")}
                    width={14}
                    height={14}
                    style={{ marginLeft: 2 }}
                    onPress={handleDateIncrement}
                />
            </View>
            {secondDate && renderSecondDate() && (
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
