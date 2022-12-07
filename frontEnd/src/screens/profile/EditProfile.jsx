import React from 'react';
import {
  Keyboard,
  View,
  Text,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
  ScrollView,
  Pressable,
} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import Ionicons from 'react-native-vector-icons/Ionicons';
Ionicons.loadFont()
import EvilIcons from 'react-native-vector-icons/EvilIcons';
EvilIcons.loadFont()
import ElevatedView from 'react-native-elevated-view';
import {Button as PaperButton, TouchableRipple} from 'react-native-paper';

import Button from '../../components/Button';
import {
  fadedOrange,
  orange,
  primary,
  secondary,
  white,
} from '../../constants/colors';
import {layout} from '../../shared/styles';
import Input from './components/Input';

export default function EditProfile({navigation}) {
  const [firstname, setFirstname] = React.useState('');
  const [lastname, setLastname] = React.useState('');
  const [image, setImage] = React.useState('');
  const surnameRef = React.createRef(null);
  async function onIconPress() {
    try {
      const {assets} = await launchImageLibrary(
        {mediaType: 'photo'},
        response => response,
      );
      setImage(assets[0].uri);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <ScrollView
        style={{
          flex: 1,
          paddingBottom: 30,
        }}
        contentContainerStyle={{
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View style={{...styles.photo, ...layout.center}}>
          <Text style={styles.title}>Votre profil</Text>
          {image.length ? (
            <ElevatedView
              elevation={5}
              style={{...layout.center, ...styles.elevated}}>
              <Image source={{uri: image}} style={styles.image} />
            </ElevatedView>
          ) : (
            <TouchableRipple
              style={{...layout.center, ...styles.elevated}}
              onPress={() => onIconPress()}
              borderles>
              <>
                <Ionicons name="person-outline" size={50} color={secondary} />
                <Text style={{color: secondary}}>Ajouter un photo</Text>
              </>
            </TouchableRipple>
          )}
          {image.length ? (
            <View style={{...layout.center, ...styles.circle, marginTop: 10}}>
              <Ionicons
                onPress={() => onIconPress()}
                name="camera"
                size={20}
                color={white}
              />
            </View>
          ) : null}
        </View>
        <Input
          placeholder="Jessica..."
          value={firstname}
          onChangeText={setFirstname}
          returnKeyType="next"
          onSubmitEditing={() => {
            surnameRef.current.focus();
          }}
        />
        <Input
          label="Nom"
          placeholder="Mc Miller..."
          value={lastname}
          onChangeText={setLastname}
          style={{marginTop: 10}}
          ref={surnameRef}
        />
        <Button
          style={{...styles.dateButton}}
          onPress={() => console.log('pressed calendar')}
          icon={<EvilIcons name="calendar" size={35} color={secondary} />}
          title="Choisir une date"
          textStyle={{color: secondary}}
        />
        <Button
          title="Confirmer"
          onPress={() => navigation.navigate('Profile Details')}
          style={{marginTop: 25}}
        />
      </ScrollView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  photo: {
    height: 350,
  },
  title: {
    paddingTop: 10,
    fontWeight: 'bold',
    fontSize: 30,
    color: primary,
  },
  image: {
    resizeMode: 'contain',
    height: 200,
    width: 130,
    borderRadius: 10,
  },
  elevated: {
    height: 198,
    width: 130,
    borderRadius: 10,
    marginTop: 20,
    backgroundColor: 'transparent',
  },
  circle: {
    height: 30,
    width: 30,
    borderRadius: 30,
    backgroundColor: orange,
  },
  dateButton: {
    marginTop: 10,
    backgroundColor: fadedOrange,
    padding: 10,
  },
});
