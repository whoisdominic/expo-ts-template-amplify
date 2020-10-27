import { Auth } from "aws-amplify";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
} from "react-native";
import { color } from "react-native-reanimated";

const { width, height } = Dimensions.get("window");

export default function SignupScreen({ navigation }) {
  const [error, setError] = useState(null);
  const [userData, setuserData] = useState({
    email: "",
    password: "",
    check_textInputChange: false,
    secureTextEntry: true,
  });
  const [twoFactor, setTwoFactor] = useState(false);
  const [twoFactorId, setTwoFactorId] = useState("");
  const [twoFactorInput, setTwoFactorInput] = useState("");

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
    setError(null);
    console.log(userData);
    try {
      const signupCall = await Auth.signUp({
        username: userData.email,
        password: userData.password,
        attributes: {
          email: userData.email,
        },
      });
      console.log("signup call", signupCall);
      setTwoFactor(true);
      setTwoFactorId(userData.email);
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  };

  const handleTwoFactorId = (code: string) => {
    setTwoFactorInput(code);
  };

  const handleTwoFactor = async () => {
    try {
      const twoFactorCall = await Auth.confirmSignUp(
        twoFactorId,
        twoFactorInput
      );
      console.log(twoFactorCall);
      /* Once the user successfully confirms their account, update form state to show the sign in form*/
    } catch (err) {
      console.log({ err });
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>Signup Screen</Text>
      <Text onPress={() => navigation.goBack()}>Back</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-around",
  },
});
