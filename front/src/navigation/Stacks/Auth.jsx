import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../../screens/Auth/Login';
import Number from '../../screens/Auth/Number';
import Register from '../../screens/profile/Register';
import Code from '../../screens/Auth/Code';
import Gender from '../../screens/Auth/Gender';
import Interest from '../../screens/Interest';
import useUserInfo from '../../providers/hooks/useUserInfo';
import TabNavigator from '../Tabs';
import ProfileResume from '../../screens/ProfileResume';
import ProfileDetails from '../../screens/profile/Profile';
const Stack = createNativeStackNavigator();

export default function AuthStackNavigator() {
  const {user} = useUserInfo();
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {user.isLogged ? (
        <>
          <Stack.Screen name="Tabs" component={TabNavigator} />
          <Stack.Screen name="ProfileDetails" component={ProfileDetails} />
        </>
      ) : (
        <>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Number" component={Number} />
          <Stack.Screen name="Code" component={Code} />
          <Stack.Screen name="Gender" component={Gender} />
          <Stack.Screen name="Interests" component={Interest} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="ProfileResume" component={ProfileResume} />
        </>
      )}
    </Stack.Navigator>
  );
}
