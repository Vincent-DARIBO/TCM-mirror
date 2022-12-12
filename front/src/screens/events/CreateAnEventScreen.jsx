import {StyleSheet, View, Pressable, Text, TextInput} from 'react-native';
import {Calendar} from 'react-native-calendars';
import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import ElevatedView from 'react-native-elevated-view';
import {Ionicons} from '@expo/vector-icons';

export default function CreateAnEventScreen({navigation}) {
  return (
    <ScrollView>
      <View style={{marginTop: 40, marginLeft: 40, position: 'absolute'}}>
        <Ionicons
          onPress={() => navigation.navigate('Home')}
          name="camera"
          size={35}
          color="orange"
          style={{borderWidth: 0.5, width: 45, borderColor: 'lightgray'}}
        />
      </View>
      <View>
        <Text
          style={{
            fontWeight: '600',
            marginTop: 45,
            color: '#084887',
            padding: 45,
            fontSize: 23,
            marginRight: 55,
            position: 'absolute',
          }}>
          Créer un événement
        </Text>
        <Text
          style={{
            fontWeight: '500',
            color: '#084887',
            marginTop: 80,
            padding: 45,
            fontSize: 19,
            position: 'absolute',
            color: 'orange',
          }}>
          Compléter les informations suivantes
        </Text>
        <Calendar
          style={{
            marginTop: 170,
            height: 400,
            width: 360,
            marginLeft: 34,
            borderRadius: 10,
          }}
        />
      </View>
      <ElevatedView elevation={2} style={styles.radius}>
        <TextInput
          placeholder="Titre de l'évènement"
          style={[styles.inputTitre]}
        />
        <TextInput
          placeholder="Description"
          style={[styles.inputDescription]}
        />
      </ElevatedView>
      <Pressable style={styles.button}>
        <Text style={styles.text}>Valider</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  inputTitre: {
    width: 350,
    height: 50,
    marginTop: 60,
    marginLeft: 40,
    paddingLeft: 20,
    borderColor: 'lightgray',
    borderWidth: 0.5,
    borderRadius: 10,
  },
  inputDescription: {
    width: 350,
    height: 100,
    marginTop: 20,
    marginLeft: 40,
    paddingLeft: 20,
    borderColor: 'lightgray',
    borderWidth: 0.5,
    borderRadius: 10,
  },
  radius: {
    borderRadius: 50,
    borderWith: 1,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    marginTop: 300,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'green',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});
