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
import Ionicons from 'react-native-vector-icons/Ionicons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import ElevatedView from 'react-native-elevated-view';
import {TouchableRipple} from 'react-native-paper';

EvilIcons.loadFont()
Ionicons.loadFont()

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

export default function Register({navigation}) {
  const [firstname, setFirstname] = React.useState('');
  const [lastname, setLastname] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [image, setImage] = React.useState('');
  const surnameRef = React.createRef(null);
  const passwordRef = React.createRef(null);
 
  
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };
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
                onPress={() => pickImage()}
                name="camera"
                size={20}
                color={white}
              />
            </View>
          ) : null}
        </View>
        <Input
          placeholder="Prénom"
          value={firstname}
          onChangeText={setFirstname}
          returnKeyType="next"
          onSubmitEditing={() => {
            surnameRef.current.focus();
          }}
        />
        <Input
          placeholder="Nom"
          value={lastname}
          onChangeText={setLastname}
          style={{marginTop: 10}}
          ref={surnameRef}
          returnKeyType="next"
          onSubmitEditing={() => {
            passwordRef.current.focus();
          }}
        />
        <Input
          placeholder="Mot de passe"
          value={password}
          onChangeText={setPassword}
          style={{marginTop: 10}}
          ref={passwordRef}
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
