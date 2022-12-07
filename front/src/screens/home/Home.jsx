import React from 'react';
import {Button, Text, View} from 'react-native';
import {StyleSheet} from 'react-native';

import {FAB} from 'react-native-paper';

export default function Home({navigation}) {
  return (
    <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
      {
        <Button
          title="INSCRIPTION"
          onPress={() => navigation.navigate('Number')}
        />
      }
      <Button
        title="Register"
        onPress={() => navigation.navigate('Register')}
      />
      <Button
        title="Details"
        onPress={() => navigation.navigate('Profile details')}
      />
      <Button title="pres" onPress={() => navigation.navigate('Edit profile')} />
    </View>
  );
}
