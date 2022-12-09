import React from 'react';

import {Text, StyleSheet} from 'react-native';
import { primary } from '../../../constants/colors';

export default function Title({text, style = {}}) {
  return <Text style={{...styles.title, style}}>{text}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'left',
    marginVertical: 5,
    color: primary
  },
});
