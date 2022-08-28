import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { APP_ROUTES } from "../routes";

const Stack = createStackNavigator();

const defaultOptions = { headerShown: false };

import MedicationType from "../screens/MedicationType/MedicationType";
import ActivateDevice from "../screens/ActivateDevice/ActivateDevice";
import Connect from "../screens/Connect/Connect";

const routes = [
    { name: APP_ROUTES.MEDICATION_TYPE, component: MedicationType },
    { name: APP_ROUTES.ACTIVATE_DEVICE, component: ActivateDevice },
    { name: APP_ROUTES.CONNECT, component: Connect }
];

export default () => {
    return (
        <Stack.Navigator initialRouteName={APP_ROUTES.CONNECT}>
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
