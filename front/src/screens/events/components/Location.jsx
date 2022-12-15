import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';
import Icon from '../../../components/Icon';
import {primary, secondary} from '../../../constants/colors';
import {layout} from '../../../shared/styles';

export default function Location({location, style}) {
  return (
    <Pressable
      style={{...styles.container, ...style}}
      onPress={() => console.log('pressed')}>
      <Icon family="EvilIcons" name="location" size={30} color={secondary}/>
      <Text style={{...styles.text}}>{location.toUpperCase()}</Text>
    </Pressable>
  );
}
const styles = StyleSheet.create({
  container: {
    ...layout.row,
    alignItems: 'center',
  },
  text: {
    color: primary,
    fontSize: 16,
  },
});
