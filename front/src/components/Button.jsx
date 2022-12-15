import React, { useCallback } from 'react';

import { Pressable, Text, StyleSheet } from 'react-native';
import { blue, primary, white } from '../constants/colors';

export default function Button({
  icon,
  title = 'button',
  onPress,
  style,
  textStyle,
}) {
  const _style= useCallback( ({pressed}) => ([styles.text, {marginLeft: icon ? 15 : null, opacity: pressed ? 0.5: 1,  ...styles.center,
    ...style,
    justifyContent: icon ? null : 'center',
  }]), [style])
  return (
    <Pressable
      onPress={onPress}
      style={_style}
       >
      <>{icon}</>
      <Text style={[styles.text, {marginLeft: icon ? 15 : null}, textStyle]}>
        {title}
      </Text>
    </Pressable >
  );
}

const styles = StyleSheet.create({
  center: {
    alignItems: 'center',
    backgroundColor: primary,
    width: 295,
    height: 50,
    borderRadius: 10,
    flexDirection: 'row',
  },
  text: {
    color: white,
    fontWeight: 'bold',
    fontSize: 18,
  },
});
