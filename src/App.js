import React from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import { NavigationTheme, AppColors } from "./style";

import { AuthStack, UserStack } from "./navigation";

const App = () => {
    return (
        <NavigationContainer theme={NavigationTheme}>
            <StatusBar backgroundColor={AppColors.PrimaryBlue} />
            <UserStack />
        </NavigationContainer>
    );
};

export default App;
