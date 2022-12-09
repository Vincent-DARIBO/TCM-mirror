import {View, Text, ImageBackground} from 'react-native';
import React from 'react';
import Button from '../../components/Button';

export default function HomeScreen({navigation}) {
  return (
    <View style={{alignItems: 'center', flex: 1, marginTop: '50%'}}>
      <Text>WELCOME ON THE TOUS CHEZ MARCEL APP</Text>
      <View style={{alignItems: 'center', flex: 1, marginTop: '50%'}}>
        <Button
          title="Next"
          onPress={() => navigation.navigate('SplashScreen')}
        />
      </View>
    </View>
  );
}

