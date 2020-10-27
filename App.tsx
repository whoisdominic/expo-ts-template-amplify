import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import "react-native-gesture-handler";

import RootStack from "./screens/stacks/RootStack";
import MainStack from "./screens/stacks/MainStack";

// AWS
import Amplify from "aws-amplify";
import config from "./aws-exports";
Amplify.configure(config);

import { Auth } from "aws-amplify";

const LandingStack = createStackNavigator();

const auth: boolean = false;

export default function App() {
  const currentUserCall = async () => {
    try {
      const user = await Auth.currentAuthenticatedUser();
      console.log("User", user);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    currentUserCall();
  });

  return (
    <NavigationContainer>
      {auth ? <MainStack /> : <RootStack />}
    </NavigationContainer>
  );
}
