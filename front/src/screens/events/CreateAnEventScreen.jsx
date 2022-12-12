import {View} from 'react-native';
import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {Calendar} from 'react-native-calendars';
import Button from '../../components/Button';

export default function CreateAnEventScreen({navigation}) {
  return (
    <ScrollView>
      <View style={{marginTop: 100, padding: 15}}>
        <Button
          title="GOBACK"
          onPress={() => navigation.navigate('Home')}
          style={{height: 50, width: 50}}
        />
      </View>
      <Calendar />
    </ScrollView>
  );
}
