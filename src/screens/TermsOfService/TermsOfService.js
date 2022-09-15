import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";

import { AppColors } from "../../style";

import { Header } from "../../components/Header";
import { Text } from "../../components/Text";

const TermsOfService = () => {
    return (
        <ScrollView>
            <View style={styles.container}>
                <Header title="Terms Of Service" style={{ marginBottom: 20 }} />

                <Text
                    bottomSpacing={10}
                    leftSpacing={10}
                    rightSpacing={10}
                    color={AppColors.PrimaryBlue}
                >
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                    Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                    unknown printer took a galley of type and scrambled it to make a type specimen
                    book. It has survived not only five centuries, but also the leap into electronic
                    typesetting, remaining essentially unchanged. It was popularised in the 1960s
                    with the release of Letraset sheets containing Lorem Ipsum passages, and more
                    recently with desktop publishing software like Aldus PageMaker including
                    versions of Lorem Ipsum.
                </Text>

                <Text
                    bottomSpacing={10}
                    leftSpacing={10}
                    rightSpacing={10}
                    color={AppColors.PrimaryBlue}
                >
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                    Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                    unknown printer took a galley of type and scrambled it to make a type specimen
                    book. It has survived not only five centuries, but also the leap into electronic
                    typesetting, remaining essentially unchanged. It was popularised in the 1960s
                    with the release of Letraset sheets containing Lorem Ipsum passages, and more
                    recently with desktop publishing software like Aldus PageMaker including
                    versions of Lorem Ipsum.
                </Text>
                <Text
                    bottomSpacing={10}
                    leftSpacing={10}
                    rightSpacing={10}
                    color={AppColors.PrimaryBlue}
                >
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                    Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                    unknown printer took a galley of type and scrambled it to make a type specimen
                    book. It has survived not only five centuries, but also the leap into electronic
                    typesetting, remaining essentially unchanged. It was popularised in the 1960s
                    with the release of Letraset sheets containing Lorem Ipsum passages, and more
                    recently with desktop publishing software like Aldus PageMaker including
                    versions of Lorem Ipsum.
                </Text>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default TermsOfService;
