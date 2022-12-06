import React from 'react';
import {
    Keyboard,
    View,
    Text,
    Image,
    StyleSheet,
    TouchableWithoutFeedback,
    ScrollView,
} from 'react-native';

export default function AddEvent() {
    return (
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Text>Lundi 25 novembre</Text>
        {/* <Button title="pres" onPress={() => navigation.navigate('Number')} /> */}
      </View>
    );
  }