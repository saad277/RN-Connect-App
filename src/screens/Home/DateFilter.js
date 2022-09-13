import React from "react";
import { View, StyleSheet } from "react-native";

import { Icon } from "../../components/Icon";
import { Text } from "../../components/Text";

const DateFilter = () => {
    return (
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
