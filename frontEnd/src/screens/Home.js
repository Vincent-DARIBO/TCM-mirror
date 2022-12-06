import React from 'react';
import {Button, Text, View} from 'react-native';

export default function Home({navigation}) {
  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home</Text>
      {<Button title="pres" onPress={() => navigation.navigate('Number')} />}
    </View>
  );
}
