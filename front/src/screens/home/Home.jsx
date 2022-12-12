import React from 'react';
import {Button, Text, View} from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';

export default function Home({navigation}) {
  // ref
  const bottomSheetRef = React.useRef(null);

  // variables
  const snapPoints = React.useMemo(() => ['25%', '50%'], []);

  // callbacks
  const handleSheetChanges = React.useCallback(index => {
    console.log('handleSheetChanges', index);
  }, []);

  return (
    <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
      <Button
        title="HomeScreen"
        onPress={() => navigation.navigate('HomeScreen')}
      />
      {
        <Button
          title="INSCRIPTION"
          onPress={() => navigation.navigate('Number')}
        />
      }
      <Button
        title="Register"
        onPress={() => navigation.navigate('Register')}
      />
      <Button
        title="Details"
        onPress={() => navigation.navigate('Profile details')}
      />
      <Button
        title="pres"
        onPress={() => navigation.navigate('Edit profile')}
      />
      <Button
        title="pres"
        onPress={() => navigation.navigate('Edit profile')}
      />
      <Button title="IAM" onPress={() => navigation.navigate('Iam')} />
      <Button
        title="EventList"
        onPress={() => navigation.navigate('EventList')}
      />
      <Button
        title="AddEvent"
        onPress={() => navigation.navigate('AddEvent')}
      />
      <Button
        title="CreateAnEvent"
        onPress={() => navigation.navigate('CreateAnEventScreen')}
      />
    </View>
  );
}
