import {View, Image, StyleSheet, Text, TextInput} from 'react-native';
import React from 'react';
import Message from '../components/Message';

export default function Chat() {
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginLeft: 10 + '%',
          marginRight: 10 + '%',
          marginTop: 5 + '%',
        }}>
        <Image source={require('../assets/Femme1.png')} style={styles.image} />
        <View>
          <Text style={{fontSize: 20}}>Juliette Dubois</Text>
          <View
            style={{
              width: 40 + '%',
              flexDirection: 'row',
              alignItems: 'center',
              flex: 1,
              justifyContent: 'space-around',
            }}>
            <View
              style={{
                width: 10,
                height: 10,
                borderRadius: 5,
                backgroundColor: 'green',
              }}></View>
            <Text>Online</Text>
          </View>
        </View>
        <View
          style={{
            width: 50,
            height: 50,
            borderColor: 'black',
            borderWidth: 1,
            borderRadius: 20,
          }}>
          <Image
            source={require('../assets/3points.png')}
            style={{width: 25, height: 25, marginTop: 10, marginLeft: 10}}
          />
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginLeft: 30,
          marginTop: 15,
          marginBottom: 15,
        }}>
        <View
          style={{width: 150, height: 1, backgroundColor: '#BFC0C0'}}></View>
        <Text style={{fontSize: 10}}>Today</Text>
        <View
          style={{width: 150, height: 1, backgroundColor: '#BFC0C0'}}></View>
      </View>

      <View style={{height: 50 + '%'}}>
        <Message
          left={10}
          content="Salut Jessica, comment vous  allez ? J’ai vu que nous avons les memes centre d’interets 😄"
        />
        <Message
          left={30}
          content="Haha vraiment ! Eh bien, enchanté, Juliette ! Qu’est-ce que tu dirais d’un café ce soir ? ☕️"
        />
        <Message left={10} content="Oui, ça me va ! 😊" />
        <Message
          left={30}
          content="Cool, je t’envoies l’heure et l’endroit tout à l’heure ! Bonne journée !"
        />
      </View>
      <View style={{top: 48 + '%', backgroundColor: 'white'}}>
        <TextInput
          style={{width: 100 + '%', marginLeft: 5 + '%'}}
          placeholder="envoyez un message"></TextInput>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 50,
  },
});
