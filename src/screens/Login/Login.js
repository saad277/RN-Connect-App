import React from "react";
import { View, StyleSheet } from "react-native";

import { AppColors } from "../../style";

import { Text } from "../../components/Text";
import { Button } from "../../components/Button";

const Login = () => {
    return (
        <View style={styles.container}>
            <View style={styles.logo} />
            <Text
                color={AppColors.Black}
                leftSpacing={30}
                topSpacing={40}
                size={26}
                bottomSpacing={17}
            >
                Sign In
            </Text>
            <Text color={AppColors.PrimaryGray} leftSpacing={30} size={17} bottomSpacing={17}>
                Hi there ! Nice to see you again.
            </Text>

            <Button text="Sign In" containerStyles={styles.btn} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    logo: {
        backgroundColor: AppColors.PrimaryBlue,
        width: 130,
        height: 130,
        borderRadius: 130 / 2,
        alignSelf: "center",
        marginTop: 40
    },
    btn: {
        marginHorizontal: 30
    }
});

export default Login;
