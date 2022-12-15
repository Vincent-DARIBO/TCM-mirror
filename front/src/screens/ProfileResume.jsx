import React from 'react';
import { Button, Text, TouchableOpacity, View, Image, FlatList } from 'react-native';
import { useState, useRef } from 'react';
import Icon from '../components/Icon';
import ElevatedView from 'react-native-elevated-view';

const DATA = [
  {
    id: 1,
    text: "Photo",
    family: "MaterialIcons",
    name: "add-a-photo"
  },
  {
    id: 2,
    text: "Shopping",
    family: "FontAwesome5",
    name: "shopping-bag"
  },
  {
    id: 3,
    text: "Karaoke",
    family: "MaterialCommunityIcons",
    name: "microphone-variant"
  },
  {
    id: 4,
    text: "Yoga",
    family: "MaterialCommunityIcons",
    name: "yoga"
  },
  {
    id: 5,
    text: "Cuisine",
    family: "MaterialIcons",
    name: "food-bank"
  },
  {
    id: 6,
    text: "Tennis",
    family: "MaterialIcons",
    name: "sports-tennis"
  },
  {
    id: 7,
    text: "Courrir",
    family: "FontAwesome5",
    name: "running"
  },
  {
    id: 8,
    text: "Nager",
    family: "FontAwesome5",
    name: "swimmer"
  },
]

const ProfileResume = ({ navigation, route }) => {

  const { hobbies } = route.params

  const renderItem = ({ item }) => {
    return (
      <ElevatedView style={{ marginTop: "2%", marginBottom: "2%", width: "32%", height: 40, marginRight: "2%", borderRadius: 20, backgroundColor: "#FF9900", flexDirection: "row", alignItems: "center" }} elevation={5}>
        <Icon
          family={item.family}
          name={item.name}
          size={17}
          style={{ color: "white", marginLeft: "10%" }}
        />
        <Text style={{ color: "white", fontWeight: "bold", fontSize: 13, marginLeft: "3%" }}>{item.text}</Text>
      </ElevatedView>
    )
  }
  return (
    <View style={{ backgroundColor: "white", height: "100%" }}>
      <View style={{ marginLeft: "10%", marginRight: "10%", marginTop: "10%" }}>
        <View style={{ flexDirection: "row" }}>
          <Text style={{ color: "#084887", fontSize: 40, fontWeight: "bold" }}>Bonjour</Text>
          <Text style={{ color: "#FF9900", fontSize: 40, fontWeight: "bold" }}> Lisa,</Text>
        </View>
        <Text style={{ fontSize: 30, color: "#084887" }}>Ton compte est prêt !</Text>
        <View style={{ borderWidth: 10, height: 150, width: 150, borderRadius: 75, borderColor: "#FF9900", marginTop: "10%", justifyContent: "center", alignItems: "center" }}>
          <Image
            source={require('../assets/Femme1.png')}
            style={{ height: 135, width: 135, borderRadius: 75 }}>
          </Image>
        </View>

        <View style={{ height: "26%", marginTop: "10%" }}>
          <FlatList
            data={hobbies}
            renderItem={renderItem}
            numColumns={3}
            keyExtractor={item => item.id}
          />
        </View>

        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          {/* REMPLACER HOME PAR ACTIVITIES SCREEN */}
          <View
            style={{
              borderWidth: 1,
              backgroundColor: '#084887',
              borderRadius: 20,
              height: 60,
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: "30%"
            }}>
            <Text style={{ fontSize: 18, color: 'white', fontWeight: 'bold' }}>
              Commencer
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View >
  )

};
export default ProfileResume;