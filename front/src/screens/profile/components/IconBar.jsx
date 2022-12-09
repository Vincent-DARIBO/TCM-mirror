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
          <Entypo name="cross" size={30} onPress={onPress1} color={secondary} />
        }
        style={[styles.circle]}
      />
      <ElevatedIcon
        icon={
          <MaterialCommunityIcons
            name="clipboard-text-outline"
            size={30}
            color={primary}
          />
        }
        onPress={onPress2}
        style={[styles.circle]}
      />
      <ElevatedIcon
        icon={<Entypo name="star" size={30} color="purple" />}
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
    width: 200,
    marginTop: -30
  },
  circle: {
    height: 60,
    width: 60,
    borderRadius: 40,
    ...layout.center,
  },
});
