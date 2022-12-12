import {
  View,
  Text,
  ImageBackground,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

export default function HomeScreen({navigation}) {
  return (
    <ImageBackground
      source={require('../../assets/Splash/welcomeTCM.png')}
      style={{alignItems: 'center', height: '100%'}}>
      <KeyboardAvoidingView behavior="padding">
        <TouchableOpacity
          style={{marginTop: 800}}
          onPress={() => navigation.navigate('SplashScreen')}>
          <Text style={{fontSize: 24, color: 'orange'}}>
            Continuer l'aventure
          </Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}
