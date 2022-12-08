import { View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native';
import { useState } from 'react';
import React from 'react';

const styles = StyleSheet.create({
  linearGradient: {
    borderWidth: 1,
    justifyContent: 'center',
    borderRadius: 20,
    height: 75,
  },
});

export default function Iam({ route, navigation }) {
  const [btn, setButton] = useState(undefined);
  
  const checkValid = () => {
    if (btn !== undefined)
      navigation.navigate("Interest")
    return
  }

  return (
    <View style={{ marginLeft: '10%', marginRight: '10%' }}>
      <Text style={{ fontSize: 30, fontWeight: 'bold', marginTop: '20%' }}>
        Je suis...
      </Text>

      <View style={{ marginTop: '10%' }}>
        <TouchableOpacity onPress={() => setButton('Homme')}>
          <View
            style={{
              height: 75,
              borderWidth: 1,
              borderRadius: 20,
              justifyContent: 'center',
              backgroundColor: btn === 'Homme' ? '#007AFF' : 'white',
            }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                marginLeft: '5%',
                color: btn === 'Homme' ? 'white' : 'black',
              }}>
              Homme
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={{ marginTop: '10%' }}>
        <TouchableOpacity onPress={() => setButton('Femme')}>
          <View
            style={{
              borderWidth: 1,
              height: 75,
              borderRadius: 20,
              justifyContent: 'center',
              backgroundColor: btn === 'Femme' ? '#007AFF' : 'white',
            }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                marginLeft: '5%',
                color: btn === 'Femme' ? 'white' : 'black',
              }}>
              Femme
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={{ marginTop: '10%' }}>
        <TouchableOpacity onPress={() => setButton('Autre')}>
          <View
            style={{
              borderWidth: 1,
              height: 75,
              borderRadius: 20,
              justifyContent: 'center',
              backgroundColor: btn === 'Autre' ? '#007AFF' : 'white',
            }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                marginLeft: '5%',
                color: btn === 'Autre' ? 'white' : 'black',
              }}>
              Autre
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      <View
        style={{
          marginTop: '20%',
          borderWidth: 1,
          backgroundColor: '#007AFF',
          borderRadius: 20,
          height: '15%',
          justifyContent: 'center',
        }}>
        {
          <Button
            title="CONTINUE"
            color="#FFFFFF"
            onPress={() => checkValid()}
          />
        }
      </View>
    </View>
  );
};
