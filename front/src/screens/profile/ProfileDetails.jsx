import React from 'react';
import {
  Button,
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import ElevatedView from 'react-native-elevated-view';
import {FontAwesome5, Feather, Ionicons, EvilIcons} from '@expo/vector-icons';

import Badge from '../../components/Badge';
import {layout} from '../../shared/styles';
import {fadedOrange, primary, secondary, white} from '../../constants/colors';
import Title from './components/Title';
import Description from './components/Description';
import {FlatGrid} from 'react-native-super-grid';

export default function ProfileDetails() {
  const data = [
    'Jardiange',
    'Voyage',
    'Peinture',
    'Lecture',
    'Sport',
    'Modeling',
    'Musique',
    'Musique',
    'Musique',
    'Musique',
    'Musique',
    'Musique',
    'Musique',
  ];
  function renderItem({item}) {
    return <Badge title={item.title} textStyle={{color: white}} />;
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView contentContainerStyle={[layout.center]}>
        <ElevatedView
          elevation={5}
          style={[layout.center, styles.imageContainer]}>
          <Image
            source={require('../../assets/marcel.png')}
            style={styles.image}
          />
        </ElevatedView>

        <View
          style={{
            ...styles.row,
            alignItems: 'center',
            marginTop: 20,
          }}>
          <View style={{...styles.paragraph, width: 250}}>
            <Title text="Gilbert, 75" />
            <Description text="Ceci est une description" />
          </View>
          <TouchableOpacity style={styles.sendIcon}>
            <Feather size={30} color={secondary} name="send" />
          </TouchableOpacity>
        </View>

        <View style={[styles.paragraph, styles.row, {marginTop: 20}]}>
          <View>
            <Title text="Position" />
            <Description text="Ceci est une adresse" />
          </View>
          <Badge
            title="1km"
            icon={<EvilIcons size={25} color={secondary} name="location" />}
            style={styles.badge}
            textStyle={{color: secondary, fontSize: 15, marginLeft: 5}}
          />
        </View>

        <View style={[styles.paragraph, {marginTop: 20}]}>
          <Title text="À propos" />
          <Description text="Je suis Marcel, le fondateur de cette appli je vais écrire ce long text pour faire des test su tous chez marcel" />
        </View>

        <View
          
          style={{
            ...layout.row,
            height: 200,
            width: 300,
            flexWrap: 'wrap',
            justifyContent: "space-between"
          }}
        >
          {data.map((item, index) => (
            <Badge
              title={item}
              icon={
                <Ionicons name="checkmark-done" size={20} color={secondary} />
              }
              key={index}
              textStyle={{color: secondary, fontSize: 13, marginLeft: 5}}
              style={{
                backgroundColor: 'transparent',
                borderWidth: 1,
                borderRadius: 10,
                width: 90
              }}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  badge: {
    borderRadius: 5,
    width: 80,
    backgroundColor: fadedOrange,
    right: 0,
    position: 'absolute',
    height: 35,
  },
  image: {
    width: 200,
    height: 300,
    resizeMode: 'contain',
  },
  imageContainer: {
    width: 200,
    height: 300,
    borderRadius: 15,
    marginTop: 10,
  },
  paragraph: {
    maxWidth: 300,
    width: '80%',
    marginTop: 10,
  },
  sendIcon: {
    ...layout.center,
    borderWidth: 1,
    borderRadius: 10,
    width: 50,
    height: 50,
    borderColor: 'gainsboro',
    marginTop: 20,
  },
});
