import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";

import { AppColors } from "../../style";

import { Text } from "../../components/Text";

const FILTERS = {
    DAILY: 1,
    WEEKLY: 2,
    MONTHLY: 3
};

const Filter = (props) => {
    const { style = {} } = props;

    const [selected, setSelected] = useState(null);

    return (
        <View style={[styles.wrapper, style]}>
            <TouchableOpacity
                style={[styles.container(selected === FILTERS.DAILY), styles.borderLeft]}
                activeOpacity={0.8}
                onPress={() => setSelected(FILTERS.DAILY)}
            >
                <Text
                    color={selected === FILTERS.DAILY ? AppColors.White : AppColors.Black}
                    size={13}
                >
                    Daily
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.container(selected === FILTERS.WEEKLY)]}
                activeOpacity={0.8}
                onPress={() => setSelected(FILTERS.WEEKLY)}
            >
                <Text
                    color={selected === FILTERS.WEEKLY ? AppColors.White : AppColors.Black}
                    size={13}
                >
                    Weekly
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.container(selected === FILTERS.MONTHLY), styles.borderRight]}
                activeOpacity={0.8}
                onPress={() => setSelected(FILTERS.MONTHLY)}
            >
                <Text
                    color={selected === FILTERS.MONTHLY ? AppColors.White : AppColors.Black}
                    size={13}
                >
                    Monthly
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: "row",
        alignItems: "center",
        shadowColor: AppColors.Black,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    borderLeft: {
        borderTopLeftRadius: 9,
        borderBottomLeftRadius: 9
    },
    borderRight: {
        borderTopRightRadius: 9,
        borderBottomRightRadius: 9
    },
    container: (bool) => ({
        height: 23,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: bool ? AppColors.PrimaryBlue : AppColors.White,
        shadowColor: AppColors.Black,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        flex: 1
    })
});

export default Filter;
