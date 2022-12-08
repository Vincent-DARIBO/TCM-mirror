import React from 'react';
import {
  Button,
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

export default function ProfileDetails() {
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
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={{...styles.paragraph, marginTop: 20}}>
            <Title text="Gilbert, 75" />
            <Description text="Ceci est une description" />
          </View>
          <TouchableOpacity style={styles.sendIcon}>
            <Feather size={30} color={secondary} name="send" />
          </TouchableOpacity>
        </View>

        <View style={[styles.paragraph, {marginTop: 20}]}>
          <View style={{...styles.row, justifyContent: 'space-between'}}>
            <Title text="Position" />
            <View style={{...styles.row, ...styles.badge}}>
              <EvilIcons size={20} color={secondary} name="location" />
              <Text style={{color: secondary}}>1Km</Text>
            </View>
          </View>
          <Description text="Ceci est une adresse"/>
        </View>
        <View style={[styles.paragraph, {marginTop: 20}]}>
          <Title text="À propos" />
          <Description style={{fontSize: 20, marginTop: 5}} text="Je suis Marcel, le fondateur de cette appli je vais écrire ce long text pour faire des test su tous chez marcel"
         />
        </View>

        <Badge
          title="Shopping"
          icon={<FontAwesome5 name="shopping-bag" size={20} color={white} />}
        />
        <Badge
          title="Shopping"
          icon={<FontAwesome5 name="shopping-bag" size={20} color={white} />}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  badge: {
    paddingHorizontal: 10,
    alignItems: 'center',
    backgroundColor: fadedOrange,
    width: 75,
    height: 40,
    borderRadius: 15,
    justifyContent: 'space-between',
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
    borderRadius: 15,
  },
  sendIcon: {
    ...layout.center,
    borderWidth: 1,
    borderRadius: 5,
    width: 40,
    height: 40,
    borderColor: 'gainsboro',
  },
});
