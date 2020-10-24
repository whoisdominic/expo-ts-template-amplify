import React from "react"
import { createStackNavigator } from "@react-navigation/stack";
// Screens
import LoginScreen from "../landing/LoginScreen"
import SignupScreen from "../landing/SignupScreen"
import ForgotPassScreen from "../landing/ForgotPassScreen"
import LandingScreen from "../landing/LandingScreen"

const RootStack = createStackNavigator();

const RootStackScreen = () => (
        <RootStack.Navigator headerMode="none">
    <RootStack.Screen name="Landing" component={LandingScreen} />
    <RootStack.Screen name="Login" component={LoginScreen} />
    <RootStack.Screen name="Signup" component={SignupScreen} />
    <RootStack.Screen name="Forgot" component={ForgotPassScreen} />
  </RootStack.Navigator>
);

export default RootStackScreen;