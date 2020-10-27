import { Auth } from "aws-amplify";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  TextInput,
} from "react-native";

const { width, height } = Dimensions.get("window");

export default function LoginScreen({ navigation }) {
  const [error, setError] = useState(null);
  const [userData, setuserData] = useState({
    email: "",
    password: "",
    check_textInputChange: false,
    secureTextEntry: true,
  });

  const handleEmailInput = (val: any) => {
    if (val.length !== 0) {
      setuserData({
        ...userData,
        email: val,
        check_textInputChange: true,
      });
    } else {
      setuserData({
        ...userData,
        email: val,
        check_textInputChange: false,
      });
    }
  };

  const handlePasswordInput = (val: any) => {
    setuserData({
      ...userData,
      password: val,
    });
  };

  const handleSubmit = async () => {
    console.log(userData);
    try {
      const signInCall = await Auth.signIn(userData.email, userData.password);
      console.log(signInCall);
    } catch (error) {
      console.log(error);
      setError(error);
    }
  };
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text onPress={() => navigation.navigate("Signup")}>Login Screen</Text>
      <Text onPress={() => navigation.navigate("Forgot")}>Forgot Password</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
});
