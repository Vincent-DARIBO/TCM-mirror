import React from 'react';

import {Text, StyleSheet} from 'react-native';

export default function Description({text, style = {}}) {
  return <Text style={{...styles.description, style}}>{text}</Text>;
}

const styles = StyleSheet.create({
  description: {
    fontSize: 20,
  },
});
