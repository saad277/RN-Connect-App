import React, { useState } from "react";
import { View, StyleSheet, ScrollView, TouchableOpacity } from "react-native";

import { AppColors } from "../../style";

import { APP_ROUTES } from "../../routes";
import { Text } from "../../components/Text";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

const Login = (props) => {
    const { navigation } = props;

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <ScrollView keyboardShouldPersistTaps="handled" bounces={false}>
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

                <Input
                    containerStyles={styles.input}
                    label="Email"
                    value={email}
                    onChange={setEmail}
                />

                <Input
                    containerStyles={styles.input}
                    label="Password"
                    secureText={true}
                    value={password}
                    onChange={setPassword}
                />

                <Button text="Sign In" containerStyles={styles.btn} />
                <Text color={AppColors.PrimaryGray} centered size={12} topSpacing={14}>
                    Forgot Password?
                </Text>

                <Text color={AppColors.PrimaryGray} centered size={14} topSpacing={84}>
                    Dont't have an account?
                </Text>

                <TouchableOpacity
                    style={styles.signUp}
                    onPress={() => navigation.navigate(APP_ROUTES.SIGNUP)}
                >
                    <Text
                        color={AppColors.PrimaryBlue}
                        centered
                        size={14}
                        topSpacing={14}
                        bottomSpacing={20}
                    >
                        Sign Up
                    </Text>
                </TouchableOpacity>
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
    },
    signUp: {
        marginTop: 14,
        marginBottom: 20
    }
});

export default Login;
