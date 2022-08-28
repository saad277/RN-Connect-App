import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { APP_ROUTES } from "../routes";

const Stack = createStackNavigator();

const defaultOptions = { headerShown: false };

import MedicationType from "../screens/MedicationType/MedicationType";

const routes = [{ name: APP_ROUTES.MEDICATION_TYPE, component: MedicationType }];

export default () => {
    return (
        <Stack.Navigator>
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
