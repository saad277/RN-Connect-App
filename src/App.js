import React, { useEffect } from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Toast from "react-native-toast-message";

import { NavigationTheme, AppColors } from "./style";

import { AuthStack, UserStack } from "./navigation";
import { FirebaseService } from "./services/FirebaseService";

const Stack = createStackNavigator();

const App = () => {
    useEffect(() => {
        const listener = FirebaseService.onAuthenticated();
        return listener;
    }, []);

    return (
        <React.Fragment>
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
            <Toast position="bottom" bottomOffset={20} />
        </React.Fragment>
    );
};

export default App;
