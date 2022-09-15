import React, { useState } from "react";
import { View, StyleSheet, ScrollView, Image, TouchableWithoutFeedback } from "react-native";
import DatePicker from "react-native-date-picker";

import { AppColors } from "../../style";

import { APP_ROUTES } from "../../routes";
import { Text } from "../../components/Text";
import { Icon } from "../../components/Icon";

const ListItem = (props) => {
    const { title = "", text = "", time = "", style = {}, onPress } = props;
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={[styles.itemContainer, style]}>
                <View style={{ flex: 1 }}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <Text color={AppColors.PrimaryBlue} size={18}>
                            {title}
                        </Text>
                        {!!time && (
                            <Text color={AppColors.PrimaryBlue} size={20} rightSpacing={16}>
                                {time}
                            </Text>
                        )}
                    </View>
                    {!!text && (
                        <Text color={AppColors.PrimaryBlue} size={12} bottomSpacing={20}>
                            {text}
                        </Text>
                    )}
                </View>
                <Image source={require("../../assets/icons/right-arrow.png")} style={styles.icon} />
            </View>
        </TouchableWithoutFeedback>
    );
};

const Profile = (props) => {
    const { navigation } = props;

    const [date, setDate] = useState(new Date());
    const [open, setOpen] = useState(false);

    return (
        <ScrollView
            keyboardShouldPersistTaps="handled"
            bounces={false}
            showsVerticalScrollIndicator={false}
        >
            <Icon
                source={require("../../assets/icons/left-arrow.png")}
                width={25}
                height={25}
                style={{
                    marginTop: 20,
                    marginLeft: 20
                }}
                onPress={navigation.goBack}
            />
            <View style={styles.container}>
                <View style={styles.wrapper}>
                    <Image source={require("../../assets/avatar.png")} style={styles.avatar} />
                </View>
                <View style={styles.name}>
                    <Text size={17} color={AppColors.DarkBlue}>
                        Johanna Doe
                    </Text>
                </View>

                <Text color={AppColors.PrimaryBlue} leftSpacing={20} topSpacing={30}>
                    ACCOUNT
                </Text>
                <ListItem
                    title="Regular drug schedule"
                    time="08:00"
                    text="The time you want to us to remind you to take your regular medication"
                    style={styles.radiusTop}
                    onPress={() => setOpen(true)}
                />
                <ListItem
                    title="Notifications"
                    time="19:00"
                    text="The time you want to ask you about your day"
                    onPress={() => navigation.navigate(APP_ROUTES.NOTIFICATION)}
                />
                <ListItem title="Profile" text="A couple infos about you" />
                <ListItem title="Device" text="Add or change" style={styles.radiusBottom} />
                <Text
                    color={AppColors.PrimaryBlue}
                    leftSpacing={20}
                    topSpacing={7}
                    bottomSpacing={3}
                >
                    LET'S IMPROVE THIS APP TOGETHER
                </Text>

                <ListItem title="Feature Request" style={styles.radiusTop} />
                <ListItem title="Join our group chat(Discord)" />
                <ListItem title="Report a bug" style={styles.radiusBottom} />

                <Text
                    color={AppColors.PrimaryBlue}
                    leftSpacing={20}
                    topSpacing={7}
                    bottomSpacing={3}
                >
                    MOBILE APP
                </Text>
                <ListItem title="Privacy Policy" style={styles.radiusTop} />
                <ListItem title="Terms of service" />
                <ListItem title="FAQ" style={[styles.radiusBottom, styles.mb20]} />
            </View>
            <DatePicker
                modal
                open={open}
                date={date}
                onConfirm={(date) => {
                    setOpen(false);
                    setDate(date);
                }}
                onCancel={() => {
                    setOpen(false);
                }}
                mode="time"
            />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    wrapper: {
        position: "relative",
        alignSelf: "center",
        marginTop: 15
    },
    avatar: {
        width: 70,
        height: 70,
        borderRadius: 70 / 2
    },
    name: {
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10
    },
    itemContainer: {
        backgroundColor: AppColors.LightBlue,
        paddingTop: 18,
        paddingLeft: 18,
        marginHorizontal: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    radiusTop: {
        borderTopLeftRadius: 9,
        borderTopRightRadius: 9
    },
    radiusBottom: {
        borderBottomLeftRadius: 9,
        borderBottomRightRadius: 9
    },
    icon: {
        width: 12,
        height: 12,
        marginRight: 10,
        tintColor: AppColors.PrimaryBlue,
        alignSelf: "flex-start",
        marginTop: 17,
        marginBottom: 15
    },
    mb20: {
        marginBottom: 20
    }
});

export default Profile;
