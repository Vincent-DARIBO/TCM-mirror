import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from '../../../components/Icon';
import {primary, secondary} from '../../../constants/colors';
import {layout} from '../../../shared/styles';
import Location from './Location';
import ParticipantsRow from './ParticipantsRow';

export default function Schedule({
  beginAt,
  endAt,
  date,
  description,
  participants,
}) {
  const fakeParticipants = [
    require('../../../assets/Femme1.png'),
    require('../../../assets/marcel.png'),
    require('../../../assets/Femme1.png'),
    require('../../../assets/marcel.png'),
    require('../../../assets/Femme1.png'),
    require('../../../assets/marcel.png'),
    require('../../../assets/Femme1.png'),
    require('../../../assets/marcel.png'),
    require('../../../assets/Femme1.png'),
    require('../../../assets/marcel.png'),
  ];
  return (
    <View>
      <View style={{...layout.row}}>
        <Icon family="EvilIcons" name="clock" color="red" size={30} />
        <View style={{paddingLeft: 10}}>
          <Text style={styles.slot}>
            {beginAt} - {endAt}
          </Text>
          <Text style={styles.date}>{date}</Text>
          <ParticipantsRow participants={fakeParticipants} />
        </View>
      </View>
      <Location location="Parc de la tete d'Or" style={{marginTop: 10}} />
      <View style={{...layout.row, marginTop: 10}}>
        <Icon family="EvilIcons" name="clock" color="red" size={30} />
        <Text style={{paddingLeft: 10, flexShrink: 1, fontSize: 16}}>{description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  slot: {
    fontSize: 16,
    color: primary,
    fontWeight: '700',
  },
  date: {
    fontSize: 14,
    fontWeight: 'bold',
    color: primary,
    marginBottom: 5,
  },
});
