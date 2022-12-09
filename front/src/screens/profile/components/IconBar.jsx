import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Entypo, MaterialCommunityIcons} from '@expo/vector-icons';
import ElevatedIcon from './ElevatedIcon';
import {layout} from '../../../shared/styles';
import {primary, secondary} from '../../../constants/colors';

export default function IconBar({onPress1, onPress2, onPress3}) {
  return (
    <View style={styles.container}>
      <ElevatedIcon
        icon={
          <Entypo name="cross" size={35} onPress={onPress1} color={secondary} />
        }
        style={[styles.circle]}
      />
      <ElevatedIcon
        icon={
          <MaterialCommunityIcons
            name="clipboard-text-outline"
            size={40}
            color={primary}
          />
        }
        onPress={onPress2}
        style={[styles.circle]}
      />
      <ElevatedIcon
        icon={<Entypo name="star" size={35} color="purple" />}
        style={[styles.circle]}
        onPress={onPress3}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...layout.row,
    justifyContent: 'space-between',
    width: 300,
    marginTop: -35
  },
  circle: {
    height: 70,
    width: 70,
    borderRadius: 40,
    ...layout.center,
  },
});
