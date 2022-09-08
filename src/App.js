import React, { useReducer } from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import { NavigationTheme, AppColors } from "./style";

import { AuthStack, UserStack } from "./navigation";
import { AuthContext } from "./context/authContext";
import { authReducer, initialState } from "./context/authReducer";

const App = () => {
    const [state, dispatch] = useReducer(authReducer, initialState);

    return (
        <NavigationContainer theme={NavigationTheme}>
            <StatusBar backgroundColor={AppColors.PrimaryBlue} />
            <AuthContext.Provider value={{ state, dispatch }}>
                <UserStack />
            </AuthContext.Provider>
        </NavigationContainer>
    );
};

export default App;

