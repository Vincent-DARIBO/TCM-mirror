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
      <Text style={{ fontSize: 30, fontWeight: 'bold', marginTop: '20%', color:"#084887" }}>
        Je suis...
      </Text>

      <View style={{ marginTop: '20%' }}>
        <TouchableOpacity onPress={() => setButton('Homme')}>
          <View
            style={{
              height: 75,
              borderWidth: 1,
              borderRadius: 20,
              borderColor:"lightgrey",
              justifyContent: 'center',
              backgroundColor: btn === 'Homme' ? '#FF9900' : 'white',
            }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                marginLeft: '5%',
                color: btn === 'Homme' ? 'white' : '#084887',
              }}>
              Homme
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={{ marginTop: '5%' }}>
        <TouchableOpacity onPress={() => setButton('Femme')}>
          <View
            style={{
              borderWidth: 1,
              height: 75,
              borderRadius: 20,
              borderColor:"lightgrey",
              justifyContent: 'center',
              backgroundColor: btn === 'Femme' ? '#FF9900' : 'white',
            }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                marginLeft: '5%',
                color: btn === 'Femme' ? 'white' : '#084887',
              }}>
              Femme
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={{ marginTop: '5%' }}>
        <TouchableOpacity onPress={() => setButton('Autre')}>
          <View
            style={{
              borderWidth: 1,
              height: 75,
              borderRadius: 20,
              borderColor:"lightgrey",
              justifyContent: 'center',
              backgroundColor: btn === 'Autre' ? '#FF9900' : 'white',
            }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                marginLeft: '5%',
                color: btn === 'Autre' ? 'white' : '#084887',
              }}>
              Autre
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={() => checkValid()}>
        <View
          style={{
            marginTop: '30%',
            borderWidth: 1,
            backgroundColor: '#084887',
            borderRadius: 20,
            height: '30%',
            justifyContent: 'center',
            alignItems:"center"
          }}>
            <Text style={{fontSize:20, color:"white"}}>CONTINUER</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};