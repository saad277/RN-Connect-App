import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { APP_ROUTES } from "../routes";
import Login from "../screens/Login/Login";
import SignUp from "../screens/SignUp/SignUp";

const Stack = createStackNavigator();

const defaultOptions = { headerShown: false };

const routes = [
    { name: APP_ROUTES.LOGIN, component: Login },
    { name: APP_ROUTES.SIGNUP, component: SignUp }
];

export default () => {
    return (
        <Stack.Navigator>
            {routes.map((route, index) => {
                const { component, name, options = {} } = route;
                return (
                    <Stack.Screen
                        key={"AuthStack-" + index}
                        component={component}
                        name={name}
                        options={{ ...defaultOptions, ...options }}
                    />
                );
            })}
        </Stack.Navigator>
    );
};
