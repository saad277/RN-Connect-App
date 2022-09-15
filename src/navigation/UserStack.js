import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { APP_ROUTES } from "../routes";

const Stack = createStackNavigator();

const defaultOptions = { headerShown: false };

import Home from "../screens/Home/Home";
import MedicationType from "../screens/MedicationType/MedicationType";
import ActivateDevice from "../screens/ActivateDevice/ActivateDevice";
import Connect from "../screens/Connect/Connect";
import Profile from "../screens/Profile/Profile";
import Notifications from "../screens/Notifications/Notifications";
import Faqs from "../screens/Faqs/Faqs";
import TermsOfService from "../screens/TermsOfService/TermsOfService";
import PrivacyPolicy from "../screens/PrivacyPolicy/PrivacyPolicy";
import JoinChat from "../screens/JoinChat/JoinChat";
import FeatureRequest from "../screens/FeatureRequest/FeatureRequest";
import ReportBug from "../screens/ReportBug/ReportBug";

const routes = [
    { name: APP_ROUTES.MEDICATION_TYPE, component: MedicationType },
    { name: APP_ROUTES.ACTIVATE_DEVICE, component: ActivateDevice },
    { name: APP_ROUTES.CONNECT, component: Connect },
    { name: APP_ROUTES.PROFILE, component: Profile },
    { name: APP_ROUTES.HOME, component: Home },
    { name: APP_ROUTES.NOTIFICATION, component: Notifications },
    { name: APP_ROUTES.FAQS, component: Faqs },
    { name: APP_ROUTES.PRIVACY_POLICY, component: PrivacyPolicy },
    { name: APP_ROUTES.TERMS_SERVICE, component: TermsOfService },
    { name: APP_ROUTES.FEATURE_REQUEST, component: FeatureRequest },
    { name: APP_ROUTES.JOIN_CHAT, component: JoinChat },
    { name: APP_ROUTES.REPORT_BUG, component: ReportBug }
];

export default () => {
    return (
        <Stack.Navigator initialRouteName={APP_ROUTES.HOME}>
            {routes.map((route, index) => {
                const { component, name, options = {} } = route;
                return (
                    <Stack.Screen
                        key={"user-screen-" + index}
                        component={component}
                        name={name}
                        options={{ ...defaultOptions, ...options }}
                    />
                );
            })}
        </Stack.Navigator>
    );
};
