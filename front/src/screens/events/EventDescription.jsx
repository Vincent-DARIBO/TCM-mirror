import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  ScrollView,
  FlatList,
  Text,
} from 'react-native';
import Icon from '../../components/Icon';
import {
  gray,
  green,
  primary,
  secondary,
  fadedOrange,
} from '../../constants/colors';
import {layout} from '../../shared/styles';
import ElevatedBadge from '../../components/Badge';
import Title from '../profile/components/Title';
import Schedule from './components/Schedule';
import Button from '../../components/Button';

export default function EventDescription({route}) {
  const fakeHobies = ['Jardinage', 'Voyage'];
  const {item} = route.params;
  return (
    <View style={layout.container}>
      <View>
        <Image source={item.img} style={styles.banner} />
        <View style={{...layout.circle(60), ...layout.center, ...styles.badge}}>
          <Image
            source={require('../../assets/Femme1.png')}
            style={{...layout.circle(55), resizeMode: 'contain'}}
          />
          <View style={{...layout.circle(10), ...styles.indicator}} />
        </View>
      </View>

      <Text
        style={{
          ...styles.title,
          color: primary,
          textAlign: 'center',
          marginTop: -15,
        }}>
        {item.name} avec
        <Text style={{...styles.title, color: secondary}}> {item.creator}</Text>
      </Text>
      <View style={{paddingHorizontal: 20}}>
        <View
          style={{
            ...layout.row,
            marginVertical: 20,
            justifyContent: 'space-between',
          }}>
          <ElevatedBadge
            icon={<Icon family="Ionicons" name="wine" color={secondary} />}
            title={fakeHobies[0]}
            elevation={2}
            style={{backgroundColor: gray, borderRadius: 10}}
            textStyle={{color: null}}
          />
          <ElevatedBadge
            icon={<Icon family="Ionicons" name="wine" color={secondary} />}
            title={fakeHobies[1]}
            style={{backgroundColor: gray, borderRadius: 10}}
            textStyle={{color: null}}
            elevation={2}
          />
        </View>
        <Schedule
          beginAt="12:00AM"
          endAt="1:00PM"
          date="Mercredi 21 janvier"
          description="Ceci est un description d'un évènement qui aura lieu à la tête d'or"
        />
      </View>
      <Button
        title="Participer"
        style={styles.button}
        textStyle={{color: secondary}}
        onPress={() => console.log('pressed')}
      />
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
  title: {
    fontSize: 26,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#ffe3ba',
    width: 150,
    height: 35,
    bottom: 20,
    right: 10,
    position: 'absolute',
  },
});
