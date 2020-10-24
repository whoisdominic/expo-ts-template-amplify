import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function LandingScreen({navigation}) {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text onPress={() => navigation.navigate('Login')} >Landing Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
