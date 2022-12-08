import React from 'react';

import {Text, StyleSheet} from 'react-native';

export default function Title({text, style = {}}) {
  return <Text style={{...styles.title, style}}>{text}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'left',
  },
});
