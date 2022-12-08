import { View, Image, StyleSheet, Text } from 'react-native';
import { React, useState, useEffect, useCallback } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { GiftedChat, Bubble } from 'react-native-gifted-chat';
import { primary } from '../constants/colors';
import text from '../constants/Global';

Ionicons.loadFont()

export default function Chat() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 4,
        text: 'Cool, je t’envoies l’heure et l’endroit tout à l’heure ! Bonne journée !',
        createdAt: new Date(),
        user: {
          _id: 1,
          name: 'Juliette Dubois',
          avatar: require('../assets/Femme1.png'),
        },
        sent: true,
        received: true,
      },
      {
        _id: 3,
        text: 'Oui, ça me va ! 😊',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'Juliette Dubois',
          avatar: require('../assets/Femme1.png'),
        },
      },
      {
        _id: 2,
        text: 'Haha vraiment ! Eh bien, enchanté, Juliette ! Qu’est-ce que tu dirais d’un café ce soir ? ☕️',
        createdAt: new Date(),
        user: {
          _id: 1,
          avatar: require('../assets/Femme1.png'),
        },
        sent: true,
        received: true,

      },
      {
        _id: 1,
        text: 'Salut Jessica, comment vous  allez ? J’ai vu que nous avons les memes centre d’interets 😄',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'Juliette Dubois',
          avatar: require('../assets/Femme1.png'),
        },
      },
    ])
  }, [])

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
  }, [])



  {/* <Ionicons
onPress={() => pickImage()}
name="checkmark-done-outline"
size={20}
color="#F2994A"
/> */}

  return (
    <View style={{ flex: 1 }}>

      <View style={{ flexDirection: "row", justifyContent: 'space-around', marginLeft: 10 + '%', marginRight: 10 + '%', marginTop: 5 + '%' }}>
        <Image source={require('../assets/Femme1.png')} style={styles.image} />
        <View>
          <Text style={{ fontSize: 20, color: primary, fontWeight:'700' }}>Juliette Dubois</Text>
          <View style={{ width: 40 + '%', flexDirection: "row", alignItems: 'center', flex: 1, justifyContent: "space-around" }}>
            <View style={{ width: 10, height: 10, borderRadius: 5, backgroundColor: "green" }}></View>
            <Text style={{}}>Online</Text>
          </View>
        </View>
        <View style={{ width: 50, height: 50, borderColor: 'black', borderWidth: 1, borderRadius: 20, justifyContent:'center', alignItems:'center'}}>
          <Image source={require('../assets/3points.png')} style={{ width: 25, height: 25}} />
        </View>
      </View>

      {/* <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 25, marginRight: 25, marginTop: 15}}> */}
        <View style={{marginLeft:20 , marginRight:20, marginTop:5, height: 1, backgroundColor: '#BFC0C0' }}></View>
      {/* </View> */}

      <GiftedChat
        messages={messages}
        onSend={messages => onSend(messages)}
        user={{
          _id: 1,
        }}
      />
    </View>
  )
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