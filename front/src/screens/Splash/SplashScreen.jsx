import {View, StyleSheet, Image, Text} from 'react-native';
import React from 'react';
import BackgroundSplash from '../Splash/components/backgroundSplash';

export default function SplashScreen({navigation}) {
  return (
    <View>
      <BackgroundSplash/>
    </View>
  );
}