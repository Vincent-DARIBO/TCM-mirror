import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Keyboard,
} from 'react-native';
// import EvilIcons from 'react-native-vector-icons/EvilIcons';
// import Ionicons from 'react-native-vector-icons/Ionicons';
import {Entypo, Ionicons} from '@expo/vector-icons';
import {primary, secondary, white} from '../constants/colors';
import Button from './Button';
import Input from '../screens/profile/components/Input';
import {useEffect, useRef, useState} from 'react';

export default function LoginComponent({
  password,
  setPassword,
  email,
  setEmail,
  onLoginPress,
}) {
  const ref = useRef(null);
  const [isSecure, setIsSecure] = useState(false);

  const fadeAnim = useRef(new Animated.Value(-200)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 500,
      useNativeDriver: false,
    }).start();
  }, []);

  return (
    <Animated.View
      style={{width: 400, height: 400, borderRadius: 200, left: fadeAnim}}>
      <View
        style={{
          flexDirection: 'column',
          marginLeft: 30,
          marginRight: 30,
          marginTop: 40,
        }}>
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
          <Text style={style.title}>Se connecter</Text>
        </View>
        <View
          style={{
            width: 300,
            height: 150,
            flexDirection: 'column',
            justifyContent: 'space-around',
            marginLeft: -15,
          }}>
          <Input
            style={{width: 240, flexDirection: 'row', alignItems: 'center'}}
            styleInput={{width: 200}}
            placeholder="Adresse mail"
            icon={<Ionicons name="person" size={30} style={style.icon} />}
            value={email}
            onChangeText={setEmail}
            onSubmitEditing={() => ref.current.focus()}
          />
          <Input
            style={{width: 240, flexDirection: 'row', alignItems: 'center'}}
            styleInput={{width: 200}}
            placeholder="Mot de passe"
            icon={
              <Entypo
                name={isSecure ? 'eye' : 'eye-with-line'}
                size={30}
                style={style.icon}
                onPress={() => setIsSecure(isSecure => !isSecure)}
              />
            }
            value={password}
            onChangeText={setPassword}
            ref={ref}
            secureTextEntry={isSecure}
            onSubmitEditing={() => {
              Keyboard.dismiss();
              onLoginPress();
            }}
          />
        </View>
        <TouchableOpacity style={{marginBottom: 10}}>
          <Text>Mot de passe oublié ?</Text>
        </TouchableOpacity>
        <Button
          title="Suivant"
          style={{width: 120, borderRadius: 30, backgroundColor: secondary}}
          onPress={onLoginPress}
        />
      </View>
    </Animated.View>
  );
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
    borderTopLeftRadius: 40,
    borderBottomLeftRadius: 40,
    backgroundColor: white,
    borderColor: 'rgba(0,0,0,0)',
    borderWidth: 1,
  },
  icon: {
    color: 'grey',
  },
});
