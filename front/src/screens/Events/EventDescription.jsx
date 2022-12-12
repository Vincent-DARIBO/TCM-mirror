import React from 'react';
import {View, Image, Button, Icon, StyleSheet, ScrollView} from 'react-native';
import {green, secondary} from '../../constants/colors';
import {layout} from '../../shared/styles';
export default function EventDescription({hobies = []}) {
  const hobies = [
    'Jardiange',
    'Voyage',
    'Peinture',
    'Lecture',
    'Sport',
    'Modeling',
    'Musique',
    'Danse',
    'Musique',
    'Voila',
    'la flemme',
    'Bruh',
  ];
  return (
    <View>
      <View style={{backgroundColor: 'pink'}}>
        <Image
          source={require('../../assets/pick_nique.png')}
          style={styles.banner}
        />
        <View style={{...layout.circle(60), ...layout.center, ...styles.badge}}>
          <Image
            source={require('../../assets/Femme1.png')}
            style={{...layout.circle(55), resizeMode: 'contain'}}
          />
          <View style={{...layout.circle(10), ...styles.indicator}} />
        </View>
      </View>

      <ScrollView horizontal></ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  banner: {
    width: '100%',
    height: 100,
    opacity: 0.4,
  },
  badge: {
    position: 'absolute',
    right: 10,
    bottom: 5,
    borderWidth: 4,
    borderColor: secondary,
  },
  indicator: {
    backgroundColor: green,
    position: 'absolute',
    right: 2,
    bottom: 2,
  },
});
