import React, { useState } from "react";
import { View, StyleSheet } from "react-native";

import { AppColors } from "../../style";

import { Text } from "../../components/Text";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { CheckBox } from "../../components/CheckBox";
import { TouchableOpacity } from "react-native-gesture-handler";

const SignUp = (props) => {
    const { navigation } = props;
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isChecked, setIsChecked] = useState(false);

    return (
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

            <Input containerStyles={styles.input} label="Email" value={email} onChange={setEmail} />
            <Input
                containerStyles={styles.input}
                label="Password"
                value={password}
                onChange={setPassword}
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

            <Button text="Continue" containerStyles={styles.btn} />

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
