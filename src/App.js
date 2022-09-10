import React from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { NavigationTheme, AppColors } from "./style";

import { AuthStack, UserStack } from "./navigation";

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer theme={NavigationTheme}>
            <StatusBar backgroundColor={AppColors.PrimaryBlue} />

            <Stack.Navigator>
                <Stack.Screen
                    name={"Auth"}
                    component={AuthStack}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name={"User"}
                    component={UserStack}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
