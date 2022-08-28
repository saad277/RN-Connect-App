import React from "react";
import { StyleSheet, SafeAreaView, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { AppColors } from "../../style";

import { Text } from "../Text";
import { Icon } from "../Icon";

const Header = (props) => {
    const { title = "" } = props;

    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            <Icon
                source={require("../../assets/icons/back-icon.png")}
                width={14}
                height={14}
                onPress={navigation.goBack}
            />
            <Text color={AppColors.PrimaryBlue} size={18}>
                {title}
            </Text>
            <View />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "space-between",
        height: 43,
        flexDirection: "row",
        paddingHorizontal: 20
    }
});

export default Header;
