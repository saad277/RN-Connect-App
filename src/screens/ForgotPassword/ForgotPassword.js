import React, { useState } from "react";
import { View, StyleSheet, Keyboard, TouchableWithoutFeedback } from "react-native";
import Toast from "react-native-toast-message";

import { AppColors } from "../../style";

import { Text } from "../../components/Text";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { FirebaseService } from "../../services/FirebaseService";

const EmailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const ForgotPassword = (props) => {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState("");
    const [error, setError] = useState({});

    const handleSubmit = () => {
        setError({});
        if (!EmailRegex.test(email)) {
            setError({ email: true });
            return;
        }

        setLoading(true);

        FirebaseService.resetPasswordWithEmail(email)
            .then((res) => {
                Toast.show({
                    type: "success",
                    text1: "Verification email sent !"
                });
            })
            .catch((err) => {})
            .finally(() => {
                setLoading(false);
            });
    };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <Text centered color={AppColors.PrimaryBlue} bottomSpacing={80}>
                    Enter your email to get a verification link and reset your password
                </Text>
                <Input
                    label="Email"
                    value={email}
                    onChange={setEmail}
                    error={error?.email && "Please enter a valid email"}
                />
                <Button
                    containerStyles={{ marginTop: 50 }}
                    isLoading={loading}
                    onPress={handleSubmit}
                    text="Reset"
                />
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        marginHorizontal: 20
    }
});

export default ForgotPassword;
