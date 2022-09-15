import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";

import { AppColors } from "../../style";

import { Header } from "../../components/Header";
import { Text } from "../../components/Text";

const FeatureRequest = () => {
    return (
        <ScrollView>
            <View style={styles.container}>
                <Header title="Feature Request" style={{ marginBottom: 20 }} />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default FeatureRequest;
