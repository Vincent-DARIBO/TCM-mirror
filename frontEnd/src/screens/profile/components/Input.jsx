import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TextInput} from 'react-native-paper';

export default function Input({placeholder, label, value, onChangeText, style}) {
  return (
    <TextInput
      mode="outlined"
      label={label}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      style={[styles.input, style]}
      outlineColor="grey"
      activeOutlineColor="grey"
    />
  );
}

const styles = StyleSheet.create({
  input: {
    width: 295,
    height: 50,
  },
});
