import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function ForgotPassScreen({navigation}) {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>Forgot Password</Text>
      <Text onPress={() => navigation.navigate("Login")} >Back</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
});

