import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { APP_ROUTES } from "../routes";
import Login from "../screens/Login/Login";
import SignUp from "../screens/SignUp/SignUp";
import ForgotPassword from "../screens/ForgotPassword/ForgotPassword";

const Stack = createStackNavigator();

const defaultOptions = { headerShown: false };

const routes = [
    { name: APP_ROUTES.LOGIN, component: Login },
    { name: APP_ROUTES.SIGNUP, component: SignUp },
    { name: APP_ROUTES.FORGOT_PASSWORD, component: ForgotPassword }
];

export default () => {
    return (
        <Stack.Navigator>
            {routes.map((route, index) => {
                const { component, name, options = {} } = route;
                return (
                    <Stack.Screen
                        key={"auth-screen-" + index}
                        component={component}
                        name={name}
                        options={{ ...defaultOptions, ...options }}
                    />
                );
            })}
        </Stack.Navigator>
    );
};
