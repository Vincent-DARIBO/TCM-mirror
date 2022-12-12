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
        title="Profile"
        onPress={() => navigation.navigate('Profile')}
      />
      <Button title="pres" onPress={() => navigation.navigate('Edit profile')} />
      <Button title="Chat" onPress={() => navigation.navigate('Chat')} />
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
      <Button title="Friends" onPress={() => navigation.navigate('Friends')} />
      <Button title="Interest" onPress={() => navigation.navigate('Interest')} />
      <Button
        title="Login"
        onPress={() => navigation.navigate('Login')}
      />
      <Button title="EventDayDetailsYourActivity" onPress={() => navigation.navigate('EventDayDetailsYourActivity')} />
      <Button title="YouAreSubscribedTo" onPress={() => navigation.navigate('YouAreSubscribedTo')} />
    </View>
  );
}