import React from "react";
import { View, StyleSheet, ScrollView, Image } from "react-native";

import { AppColors } from "../../style";

import { Header } from "../../components/Header";
import { Text } from "../../components/Text";

const ListItem = (props) => {
    const { title = "", text = "", time = "", style = {} } = props;
    return (
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
    );
};

const Profile = () => {
    return (
        <ScrollView
            keyboardShouldPersistTaps="handled"
            bounces={false}
            showsVerticalScrollIndicator={false}
        >
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
                />
                <ListItem
                    title="Notifications"
                    time="19:00"
                    text="The time you want to ask you about your day"
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
        marginTop: 40
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
