import {View, StyleSheet, Image, Text} from 'react-native';
import React from 'react';
import Button from '../../components/Button';
import BackgroundSplash from '../Splash/components/backgroundSplash';

export default function SplashScreen({navigation}) {
  return (
    <View>
      <BackgroundSplash/>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    marginRight: 300,
    height: '100%',
    width: '100%',
  },
});
