import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Calendar} from 'react-native-calendars';
import ElevatedView from 'react-native-elevated-view';

import {theme} from '../EventList';
import SelectEventType from './components/SelectEventType';
import {layout} from '../../shared/styles';
import {white, green, primary, secondary} from '../../constants/colors';
import TextInputModal from './components/TextInputModal';

export default function CreateEvent() {
  const [type, setType] = React.useState('Gratuit');
  const choices = ['Gratuit', 'Payant', 'Libre'];
  const [modalVisible, setModalVisible] = React.useState('');
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [address, setAddress] = React.useState('');
  const [selectedDay, setDay] = React.useState('');

  return <TextInputModal />;

  // <ScrollView
  //   contentContainerStyle={{
  //     justifyContent: modalVisible ? 'center' : null,
  //     alignItems: 'center',
  //     // backgroundColor: 'pink',
  //   }}
  //   style={{flex: 1}}
  //   scrollEnabled={true}>
  //   <View style={{marginVertical: 15, backgroundColor: 'pink', width: 345}}>
  //     <Text
  //       style={{
  //         ...styles.title,
  //         color: primary,
  //       }}>
  //       Choisi ton évènement
  //     </Text>
  //     <Text style={{...styles.title, color: secondary}}>
  //       choisis ta date & horaires :
  //     </Text>
  //   </View>
  //   <SelectEventType type={type} setType={setType} choices={choices} />
  //   <ElevatedView elevation={2} style={styles.calendar}>
  //     <Calendar
  //       theme={theme.theme}
  //       onDayPress={day => {
  //         setModalVisible(true);
  //         setDay(day);
  //         console.log(day);
  //       }}
  //     />
  //   </ElevatedView>
  // </ScrollView>
}

const styles = StyleSheet.create({
  calendar: {
    marginTop: 10,
    paddingTop: 10,
    width: 345,
    height: 350,
  },

  radius: {
    borderRadius: 0,
    borderWith: 1,
    alignItems: 'center',
    flexDirection: 'row',
    // marginTop: 10,
  },

  title: {
    fontSize: 26,
    fontWeight: 'bold',
  },
});
