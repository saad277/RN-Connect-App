import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";

import { AppColors } from "../../style";

import { Text } from "../../components/Text";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

const Login = () => {
    return (
        <ScrollView>
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

                <Input containerStyles={styles.input} label="Email" />

                <Input containerStyles={styles.input} label="Password" secureText={true} />

                <Button text="Sign In" containerStyles={styles.btn} />
                <Text color={AppColors.PrimaryGray} centered size={12} topSpacing={14}>
                    Forgot Password?
                </Text>

                <Text color={AppColors.PrimaryGray} centered size={14} topSpacing={84}>
                    Dont't have an account?
                </Text>

                <Text
                    color={AppColors.PrimaryBlue}
                    centered
                    size={14}
                    topSpacing={14}
                    bottomSpacing={20}
                >
                    Sign Up
                </Text>
            </View>
        </ScrollView>
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
    },
    input: {
        marginHorizontal: 30,
        marginBottom: 25
    }
});

export default Login;
