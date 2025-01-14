import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import StackNavigation from "./navigations/Stack";
import TabNavigation from "./navigations/Tab";

const App = () => {
    return (
        <NavigationContainer>
            {/* <StackNavigation /> */}
            <TabNavigation />
        </NavigationContainer>
    );
};

export default App;