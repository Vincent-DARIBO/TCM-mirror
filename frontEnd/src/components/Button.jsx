import React from 'react';

import {Pressable, Text, StyleSheet} from 'react-native';
import {blue, white} from '../constants/colors';

export default function Button({title = 'button', onPress, style}) {
  return (
    <Pressable onPress={onPress} style={{...styles.center, ...style}}>
      <Text style={{color: white}}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  center: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: blue,
    width: 295,
    height: 50,
    borderRadius: 10,
  },
});
