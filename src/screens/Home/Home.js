import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";

import { AppColors } from "../../style";

import { Text } from "../../components/Text";
import { Icon } from "../../components/Icon";
import Filter from "./Filter";

const Home = () => {
    return (
        <ScrollView
            keyboardShouldPersistTaps="handled"
            bounces={false}
            showsVerticalScrollIndicator={false}
        >
            <View style={styles.header}>
                <Icon source={require("../../assets/avatar.png")} width={24} height={24} />
                <Text color={AppColors.PrimaryBlue} size={17}>
                    AIR4ME
                </Text>

                <View />
            </View>
            <Filter style={{ marginTop: 20, marginHorizontal: 20, marginBottom: 30 }} />
        </ScrollView>
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
    }
});

export default Home;
