import React, { useEffect, useState } from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Toast from "react-native-toast-message";

import { NavigationTheme, AppColors } from "./style";

import { AuthStack, UserStack } from "./navigation";
import { FirebaseService } from "./services/FirebaseService";

const App = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const listener = FirebaseService.onAuthenticated((user) => {
            if (user) {
                setIsAuthenticated(true);
            }
        });
        return listener;
    }, []);

    return (
        <React.Fragment>
            <NavigationContainer theme={NavigationTheme}>
                <StatusBar backgroundColor={AppColors.PrimaryBlue} />

                {isAuthenticated ? <UserStack /> : <AuthStack />}
            </NavigationContainer>
            <Toast position="bottom" bottomOffset={20} />
        </React.Fragment>
    );
};

export default App;
