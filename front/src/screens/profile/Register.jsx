import React, { useState } from 'react';
import {
  Keyboard,
  View,
  Text,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
  ScrollView,
} from 'react-native';
import ElevatedView from 'react-native-elevated-view';
import { ActivityIndicator, TouchableRipple } from 'react-native-paper';
import { Ionicons, EvilIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

import Button from '../../components/Button';
import {
  fadedOrange,
  orange,
  primary,
  secondary,
  white,
} from '../../constants/colors';
import { layout } from '../../shared/styles';
import Input from './components/Input';
import useUserInfo from '../../providers/hooks/useUserInfo';
import { useMutation, useQuery } from 'react-query';
import { baseUrl, createUser } from '../../shared/utils';
import axios from 'axios';

export default function Register({ navigation, route }) {
  const [firstName, setFirstname] = React.useState('');
  const [lastName, setLastname] = React.useState('');
  const [image, setImage] = React.useState('');
  const surnameRef = React.createRef(null);
  const { user, setUser } = useUserInfo();
  const refMonth = React.useRef(null);
  const refYear = React.useRef(null);
  const [day, setDay] = React.useState(null);
  const [month, setMonth] = React.useState(null);
  const [year, setYear] = React.useState(null);
  const { hobbies } = route.params;

  // console.log({user});
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

  const { data, mutate, isSuccess, status, error, isError, isLoading } =
    useMutation(() =>
      createUser({
        firstName,
        lastName,
        email: user.email,
        phone: user.phone,
        password: user.password,
        birthDate: '12/12/2002',
        location: '2 Rue du professeur Charles Appleton',
      }),
    );


  function onConfirmPress() {
    //console.log({ user });
    mutate();
    setUser({
      ...user, token: data ? data.data.access_token : '', firstName,
      lastName,
    });
    console.log("Register : ")
    console.log(hobbies)
    navigation.navigate("ProfileResume", { hobbies: hobbies })

  }
  if (isError) console.log({ error });
  isLoading && console.log('loading...');
  isSuccess &&
    setUser({ ...user, isLogged: true, token: data.data.access_token });
  // !isLoading &&
  //   isSuccess &&
  //   console.log({user, token: data.data.access_token}) &&
  //   setUser({...user, token: data.data.access_token, isLogged: true});

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
        <View style={{ ...styles.photo, ...layout.center }}>
          <Text style={styles.title}>Votre profil</Text>
          {image.length ? (
            <ElevatedView
              elevation={5}
              style={{ ...layout.center, ...styles.elevated }}>
              <Image source={{ uri: image }} style={styles.image} />
            </ElevatedView>
          ) : (
            <TouchableRipple
              style={{ ...layout.center, ...styles.elevated }}
              onPress={() => pickImage()}
              borderles>
              <>
                <Ionicons name="person-outline" size={50} color={secondary} />
                <Text style={{ color: secondary }}>Ajouter un photo</Text>
              </>
            </TouchableRipple>
          )}
          {image.length ? (
            <View style={{ ...layout.center, ...styles.circle, marginTop: 10 }}>
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
          value={firstName}
          onChangeText={setFirstname}
          returnKeyType="next"
          onSubmitEditing={() => {
            surnameRef.current.focus();
          }}
        />
        <Input
          placeholder="Nom"
          value={lastName}
          onChangeText={setLastname}
          style={{ marginTop: 10 }}
          ref={surnameRef}
        />
        {/* <Button
          style={{...styles.dateButton}}
          onPress={() => console.log('pressed calendar')}
          icon={<EvilIcons name="calendar" size={35} color={secondary} />}
          title="Choisir une date"
          textStyle={{color: secondary}}
        /> */}
        <View style={{flexDirection:'row', width:295}}>
          <Input style={{ flex:3, marginTop: 10, backgroundColor:white, width: 75, borderRadius: 15, ...layout.center}} styleInput={{width: 75, paddingLeft: 0}} maxLength={2} textAlign={"center"} placeholder="JJ" ref={refDay} onChangeText={(day) => {setDay(day); if (day.length === 2) refMonth.current.focus()}}></Input>
          <Input style={{ flex:3, marginTop: 10, backgroundColor:white, width: 75, borderRadius: 15, ...layout.center}} styleInput={{width: 75, paddingLeft: 0}} maxLength={2} textAlign={"center"} placeholder="MM" ref={refMonth} onChangeText={(month) => {setMonth(month); if (month.length === 2) {refYear.current.focus()} }}></Input>
          <Input style={{ flex:3, marginTop: 10, backgroundColor:white, width:100, borderRadius: 15, ...layout.center}} styleInput={{width:100, paddingLeft: 0}} maxLength={4} textAlign={"center"} placeholder="YYYY" ref={refYear} ></Input>
        </View>
        <Button
          title="Confirmer"
          onPress={() => onConfirmPress()}
          style={{ marginTop: 25 }}
          icon={
            isLoading ? (
              <ActivityIndicator
                animating={true}
                color={white}
              />
            ) : null
          }
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
    backgroundColor: secondary,
  },
  dateButton: {
    marginTop: 10,
    backgroundColor: fadedOrange,
    padding: 10,
  },
});
