import React from 'react';
import {Button, Text, View} from 'react-native';

export default function Home({navigation}) {
  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      {<Button title="INSCRIPTION" onPress={() => navigation.navigate('Number')} />}
    </View>
  );
}
