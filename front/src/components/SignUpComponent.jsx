import { View, Text, StyleSheet, Animated } from "react-native"
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { primary, white, secondary } from '../constants/colors';
import Input from "../screens/profile/components/Input";
import { useEffect, useRef } from "react";

export default function SignUpComponent({
  password,
  setPassword,
  email,
  setEmail,
  verify,
  setVerify,
  onSignUpPress,
}) {
  const passwordRef = useRef(null);
  const verifyRef = useRef(null);
  
  const fadeAnim = useRef(new Animated.Value(200)).current

  useEffect( () =>  {
    Animated.timing(
      fadeAnim,
      {
        toValue: 0,
        duration: 500,
        useNativeDriver: false,
      }
    ).start();
  }, []);

  return(
    <Animated.View style={{ width: 400, height: 400, borderRadius: 200, left: fadeAnim }}>
      <View style={{ flexDirection: "column", marginLeft: 30, marginRight: 30, marginTop: 20 }}>
        <View>
          <View
            style={{
              backgroundColor: secondary,
              width: 40,
              height: 40,
              borderRadius: 20,
              position: 'absolute',
              marginTop: 10,
              marginLeft: -10,
            }}></View>
        </View>
        <Text style={style.title}>S'inscrire</Text>
        <View
          style={{
            width: 300,
            height: 200,
            flexDirection: 'column',
            justifyContent: 'space-between',
            marginTop: 10,
            marginLeft: -15,
          }}>
          <Input
            style={{width: 240, flexDirection: 'row', alignItems: 'center'}}
            styleInput={{width: 200}}
            placeholder="Adresse mail"
            icon={<Ionicons name="person" size={30} style={style.icon} />}
            value={email}
            onChangeText={setEmail}
            onSubmitEditing={() => passwordRef.current.focus()}
          />
          <Input
            style={{width: 240, flexDirection: 'row', alignItems: 'center'}}
            styleInput={{width: 200}}
            placeholder="Mot de passe"
            icon={<EvilIcons name="lock" size={30} style={style.icon} />}
            value={password}
            onChangeText={setPassword}
            onSubmitEditing={() => verifyRef.current.focus()}
            ref={passwordRef}
          />
          <Input
            style={{width: 240, flexDirection: 'row', alignItems: 'center'}}
            styleInput={{width: 200}}
            placeholder="V??rifier mot de passe"
            icon={<EvilIcons name="lock" size={30} style={style.icon} />}
            value={verify}
            onChangeText={setVerify}
            ref={verifyRef}
            onSubmitEditing={onSignUpPress}
          />
        </View>
      </View>
    </Animated.View>
  )
}

const style = StyleSheet.create({
  title: {
    color: primary,
    fontWeight: '700',
    fontSize: 32,
    marginTop: 10,
    marginBottom: 10,
  },
  text: {
    color: white,
  },
  bold: {
    color: white,
    fontWeight: '700',
  },
  image: {
    width: 30,
    height: 30,
  },
  parent: {
    flexDirection: 'row',
  },
  textinput: {
    width: 200,
    borderRadius: 40,
    backgroundColor: white,
  },
  icon: {
    color: 'grey',
  },
});
