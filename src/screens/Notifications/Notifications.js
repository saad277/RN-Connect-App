import React, { useState } from "react";
import { View, StyleSheet } from "react-native";

import { AppColors } from "../../style";

import { Header } from "../../components/Header";
import { Text } from "../../components/Text";
import { Switch } from "../../components/Switch";

const NotifiationItem = (props) => {
    const { title = "" } = props;

    const [enabled, setEnabled] = useState(true);

    return (
        <View
            style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginHorizontal: 20,
                backgroundColor: AppColors.LightBlue,
                padding: 10,
                borderRadius: 9,
                marginBottom: 10
            }}
        >
            <Text color={AppColors.PrimaryBlue}>{title}</Text>
            <Switch value={enabled} onChange={setEnabled} />
        </View>
    );
};

const Notifications = () => {
    return (
        <View style={styles.container}>
            <Header title="Notifications" style={{ marginBottom: 20 }} />

            <NotifiationItem title={"App Notifications"} />
            <NotifiationItem title={"Drug Schedule"} />
            <NotifiationItem title={"New Device"} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default Notifications;
