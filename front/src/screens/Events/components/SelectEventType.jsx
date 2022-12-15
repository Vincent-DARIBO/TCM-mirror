import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {layout} from '../../../shared/styles';
import {white} from '../../../constants/colors';

export default function SelectEventType({type, setType, choices}) {
  return (
    <View style={styles.container}>
      {choices.map((item ,index) => {
        const isSelected = item === type;
        return (
          <Pressable
            style={{
              flex: choices.length,
              ...styles.item,
              backgroundColor: isSelected ? '#f2b966' : null,
            }}
            onPress={() => setType(item)}
            key={index}>
            <Text
              style={{...styles.text, color: isSelected ? white : '#f2b966'}}>
              {item}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    height: 82,
    width: '90%',
    maxWidth: 345,
    backgroundColor: '#f7d4a1',
    ...layout.row,
    borderRadius: 15,
  },
  item: {
    ...layout.center,
    borderRadius: 15,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});

//  f2b966
