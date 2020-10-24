import React from "react"
import { createStackNavigator } from "@react-navigation/stack";
// Screens
import HomeScreen from "../main/HomeScreen"

const MainStack = createStackNavigator();

const MainStackScreen = () => (
        <MainStack.Navigator headerMode="none">
    <MainStack.Screen name="Home" component={HomeScreen} />
  </MainStack.Navigator>
);

export default MainStackScreen;