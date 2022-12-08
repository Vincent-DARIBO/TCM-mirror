import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Button, Text } from "react-native";

import OTPInputView from "@twotalltotems/react-native-otp-input";

const Code = ({ route, navigation }) => {

  const checkVerification = (code) => {

    console.log("code " + code)
    if (code === "0000")
      navigation.navigate("Gender")
    else {
      setInvalidCode(true)
      setCode('')
    }
  }

  const { phoneNumber } = route.params;
  const [invalidCode, setInvalidCode] = useState(false);
  const [myCode, setCode] = useState('')

  return (
    <SafeAreaView style={styles.wrapper}>
      <Text style={styles.prompt}>Enter the code we sent you</Text>
      <Text style={styles.message}>
        {`Your phone (${phoneNumber}) will be used to protect your account each time you log in.`}
      </Text>
      <Button
        title="Edit Phone Number"
        onPress={() => navigation.replace("Number")}
      />
      <OTPInputView
        style={{ width: "80%", height: 200 }}
        pinCount={4}
        editable={true}
        autoFocusOnLoad
        codeInputFieldStyle={styles.underlineStyleBase}
        codeInputHighlightStyle={styles.underlineStyleHighLighted}
        onCodeFilled={(code) => {checkVerification(code)}}
      />
      {invalidCode && <Text style={styles.error}>Incorrect code.</Text>}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  borderStyleBase: {
    width: 30,
    height: 45,
  },

  borderStyleHighLighted: {
    borderColor: "#03DAC6",
  },

  underlineStyleBase: {
    width: 30,
    height: 45,
    borderWidth: 0,
    borderBottomWidth: 1,
    color: "black",
    fontSize: 20,
  },

  underlineStyleHighLighted: {
    borderColor: "#03DAC6",
  },

  prompt: {
    fontSize: 24,
    paddingHorizontal: 30,
    paddingBottom: 20,
  },

  message: {
    fontSize: 16,
    paddingHorizontal: 30,
  },

  error: {
    color: "red",
  },
});

export default Code;