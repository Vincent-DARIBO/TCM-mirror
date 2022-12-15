import React from 'react';
import {
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {Calendar} from 'react-native-calendars';
import ElevatedView from 'react-native-elevated-view';
import {MaterialCommunityIcons, Feather} from '@expo/vector-icons';

import {theme} from '../EventList';
import SelectEventType from './components/SelectEventType';
import Input from '../profile/components/Input';
import {layout} from '../../shared/styles';
import {white, green, primary, secondary} from '../../constants/colors';
import Button from '../../components/Button';
import Title from '../profile/components/Title';

export default function CreateEvent() {
  const [type, setType] = React.useState('Gratuit');
  const choices = ['Gratuit', 'Payant', 'Libre'];
  const [modalVisible, setModalVisible] = React.useState('');
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [address, setAddress] = React.useState('');
  const [selectedDay, setDay] = React.useState('');

  return (
    <ScrollView
      contentContainerStyle={{
        justifyContent: modalVisible ? 'center' : null,
        alignItems: 'center',
        // backgroundColor: 'pink',
      }}
      style={{flex: 1}}
      scrollEnabled={true}>
      <View style={{marginVertical: 15, backgroundColor: 'pink', width: 345}}>
        <Text
          style={{
            ...styles.title,
            color: primary,
          }}>
          Choisi ton évènement
        </Text>
        <Text style={{...styles.title, color: secondary}}>
          choisis ta date & horaires :
        </Text>
      </View>
      <SelectEventType type={type} setType={setType} choices={choices} />
      <ElevatedView elevation={2} style={styles.calendar}>
        <Calendar
          theme={theme.theme}
          onDayPress={day => {
            setModalVisible(true);
            setDay(day);
            console.log(day);
          }}
        />
      </ElevatedView>
      <Modal visible={modalVisible}>
        <Pressable
          onPress={() => setModalVisible(false)}
          style={{...layout.center, backgroundColor: 'gray', flex: 1}}>
          <View style={styles.modalContent}>
            <Title text={selectedDay.dateString} />
            <Input
              placeholder="Nom"
              value={name}
              onChangeText={setName}
              icon={
                <MaterialCommunityIcons
                  name="note-outline"
                  size={20}
                  style={styles.icon}
                />
              }
              style={{...styles.input, borderRadius: 0}}
            />
            <Input
              placeholder="Description"
              value={description}
              onChangeText={setDescription}
              mutiline
              maxLength={150}
              icon={
                <MaterialCommunityIcons
                  name="note-outline"
                  size={20}
                  style={styles.icon}
                />
              }
              style={{...styles.input, borderRadius: 0}}
              styleInput={{height: 130}}
            />
            <View
              style={{
                ...styles.radius,
                backgroundColor: white,
              }}>
              <Feather
                name="search"
                size={20}
                style={{opacity: 0.7, marginLeft: 15}}
              />
              <TextInput
                placeholder="Trouver une adresse"
                value={address}
                onChangeText={setAddress}
                style={{...styles.inputSize}}
              />
            </View>
            <Button
              title="valider"
              onPress={() => console.log('pressed')}
              style={styles.button}
            />
          </View>
        </Pressable>
      </Modal>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  calendar: {
    marginTop: 10,
    paddingTop: 10,
    width: 345,
    height: 350,
  },
  inputSize: {
    width: 295,
    height: 50,
    paddingLeft: 20,
  },
  input: {
    flexDirection: 'row',
    alignItems: 'center',
    // marginTop: 10,
    // borderBottomWidth: 1,
  },
  radius: {
    borderRadius: 0,
    borderWith: 1,
    alignItems: 'center',
    flexDirection: 'row',
    // marginTop: 10,
  },
  icon: {
    marginRight: 15,
    opacity: 0.7,
  },
  button: {
    backgroundColor: green,
    marginTop: 50,
  },
  modalContent: {
    ...layout.center,
    backgroundColor: white,
    borderRadius: 20,
    padding: 10,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
  },
});
