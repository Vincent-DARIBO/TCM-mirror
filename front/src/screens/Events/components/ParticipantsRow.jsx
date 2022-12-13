import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {gray} from '../../../constants/colors';
import {layout} from '../../../shared/styles';

export default function ParticipantsRow({participants = []}) {
  const rest = participants.length > 5 ? participants.length - 5 : 0;

  return (
    <View style={styles.participants}>
      {participants.map((participant, index) =>
        index < 5 ? (
          <Image
            style={{...styles.image, marginLeft: -10}}
            source={participant}
            key={index}
          />
        ) : null,
      )}
      {rest ? (
        <View style={{...styles.image, ...layout.center}}>
          <Text style={{fontSize: 18, color: 'gray'}}>+{rest}</Text>
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  participants: {
    ...layout.row,
  },
  image: {
    ...layout.circle(30),
  },
});
