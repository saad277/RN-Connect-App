import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";

import { AppColors } from "../../style";

import { Header } from "../../components/Header";
import { Text } from "../../components/Text";

const JoinChat = () => {
    return (
        <ScrollView>
            <View style={styles.container}>
                <Header title="Join Our Group Chat" style={{ marginBottom: 20 }} />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default JoinChat;
