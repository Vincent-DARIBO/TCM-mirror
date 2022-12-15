import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import ElevatedView from 'react-native-elevated-view';

function Input(
  {placeholder, label, value, onChangeText, style, icon, styleInput, ...props},
  ref,
) {
  return (
    <ElevatedView elevation={2} style={{...styles.radius, ...style}}>
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        style={[styles.input, styleInput]}
        ref={ref}
        {...props}
      />
      {icon}
    </ElevatedView>
  );
}
export default React.forwardRef(Input);

const styles = StyleSheet.create({
  input: {
    width: 295,
    height: 50,
    paddingLeft: 20,
  },
  radius: {
    borderRadius: 50,
    borderWith: 1,
  },
});
