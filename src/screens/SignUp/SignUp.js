import React, { useState } from "react";
import {
    View,
    StyleSheet,
    Keyboard,
    TouchableWithoutFeedback,
    TouchableOpacity
} from "react-native";
import Toast from "react-native-toast-message";

import { AppColors } from "../../style";

import { Text } from "../../components/Text";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { CheckBox } from "../../components/CheckBox";
import { FirebaseService } from "../../services/FirebaseService";

const EmailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const SignUp = (props) => {
    const { navigation } = props;
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isChecked, setIsChecked] = useState(false);
    const [error, setError] = useState({});
    const [loading, setLoading] = useState(false);

    const handleSubmit = () => {
        let flag = false;
        setError({});
        if (!EmailRegex.test(email)) {
            setError({ email: true });
            flag = true;
        }

        if (password?.trim().length < 6) {
            setError({ ...(flag && { email: true }), password: true });
            flag = true;
        }

        if (flag) return;

        if (!isChecked) {
            Toast.show({
                type: "info",
                text1: "Please agree terms of service !"
            });
            return;
        }

        setLoading(true);

        FirebaseService.createUser(email, password)
            .then((res) => {
                Toast.show({
                    type: "success",
                    text1: "User created successfully"
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
                <Text
                    color={AppColors.Black}
                    leftSpacing={30}
                    topSpacing={40}
                    size={26}
                    bottomSpacing={34}
                >
                    Sign Up
                </Text>

                <Input
                    containerStyles={styles.input}
                    label="Email"
                    value={email}
                    onChange={setEmail}
                    error={error?.email && "Please enter a valid email"}
                />
                <Input
                    containerStyles={styles.input}
                    label="Password"
                    value={password}
                    onChange={setPassword}
                    secureText={true}
                    error={error?.password && "Please enter a password with atleast 6 characters"}
                />

                <View style={{ flexDirection: "row", marginLeft: 30 }}>
                    <CheckBox onValueChange={(val) => setIsChecked(val)} value={isChecked} />
                    <Text size={14} topSpacing={9} leftSpacing={12}>
                        I agree to the{" "}
                    </Text>
                    <Text size={14} topSpacing={9} color={AppColors.PrimaryBlue}>
                        Terms of services{" "}
                    </Text>
                    <Text size={14} topSpacing={9}>
                        and
                    </Text>
                </View>
                <Text size={14} topSpacing={9} color={AppColors.PrimaryBlue} leftSpacing={73}>
                    Privacy Policy.
                </Text>

                <Button
                    text="Continue"
                    isLoading={loading}
                    containerStyles={styles.btn}
                    onPress={handleSubmit}
                />

                <View style={{ flexDirection: "row", justifyContent: "center" }}>
                    <Text
                        size={14}
                        topSpacing={9}
                        centered
                        leftSpacing={12}
                        color={AppColors.PrimaryGray}
                    >
                        Have an Account?{" "}
                    </Text>
                    <TouchableOpacity onPress={navigation.goBack}>
                        <Text size={14} topSpacing={9} color={AppColors.PrimaryBlue}>
                            Sign In
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    input: {
        marginHorizontal: 30,
        marginBottom: 25
    },
    btn: {
        marginHorizontal: 30,
        marginTop: 45,
        marginBottom: 30
    }
});

export default SignUp;
