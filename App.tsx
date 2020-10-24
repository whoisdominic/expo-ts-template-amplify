import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';

import RootStack from "./screens/stacks/RootStack";
import MainStack from "./screens/stacks/MainStack"

const LandingStack = createStackNavigator();

const auth: boolean = false

export default function App() {
  return (
    <NavigationContainer>
      {auth? <MainStack /> : <RootStack />} 
    </NavigationContainer>
    )
}
