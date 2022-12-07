import React from 'react';
import {StyleSheet, Pressable, Text} from 'react-native';
import ElevatedView from 'react-native-elevated-view';
import {secondary, white} from '../constants/colors';

export default function Badge({icon, title, textStyle, onPress, props}) {
  return (
    <ElevatedView
      elevation={2}
      style={{
        ...styles.center,
      }}
      {...props}>
      <Pressable
        onPress={onPress}
        style={{
          ...styles.center,
          justifyContent: icon ? null : 'center',
          paddingHorizontal: 10
        }}>
        <>{icon}</>
        <Text style={[styles.text, {marginLeft: icon ? 15 : null}, textStyle]}>
          {title}
        </Text>
      </Pressable>
    </ElevatedView>
  );
}
const styles = StyleSheet.create({
  center: {
    alignItems: 'center',
    backgroundColor: secondary,
    width: 150,
    height: 40,
    borderRadius: 20,
    flexDirection: 'row',
  },
  text: {
    color: white,
    fontWeight: 'bold',
    fontSize: 18,
  },
});
