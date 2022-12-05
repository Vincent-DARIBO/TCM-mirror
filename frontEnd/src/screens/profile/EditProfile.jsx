import React from 'react';
import {
  Keyboard,
  View,
  Text,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
  ScrollView,
} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ElevatedView from 'react-native-elevated-view';
import {Button as PaperButton} from 'react-native-paper';

import Button from '../../components/Button';
import {orange, white} from '../../constants/colors';
import {layout} from '../../shared/styles';
import Input from './components/Input';

export default function EditProfile() {
  const [firstname, setFirstname] = React.useState('');
  const [lastname, setLastname] = React.useState('');
  const [image, setImage] = React.useState('');
  async function onIconPress() {
    try {
      const {assets} = await launchImageLibrary(
        {mediaType: 'photo'},
        response => response,
      );
      console.log({assets});
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
            <PaperButton onPress={() => onIconPress()}>
              Ajouter une photo de profile
            </PaperButton>
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
          label="Prénom"
          placeholder="Jessica..."
          value={firstname}
          onChangeText={setFirstname}
        />
        <Input
          label="Nom"
          placeholder="Mc Miller..."
          value={lastname}
          onChangeText={setLastname}
          style={{marginTop: 10}}
        />
        <Button
          style={{marginTop: 10}}
          title="choisir une date"
          onPress={() => console.log('pressed calendar')}
        />
        <Button
          title="confirmer"
          onPress={() => console.log('pressed confirmer')}
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
});
