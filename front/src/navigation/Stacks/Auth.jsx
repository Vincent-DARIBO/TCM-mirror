import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../../screens/Login';
import Number from '../../screens/Number';
import Register from '../../screens/profile/Register';
import Code from '../../screens/Code';
import Gender from '../../screens/Gender';
import Interest from '../../screens/Interest';
import useUserInfo from '../../providers/hooks/useUserInfo';
import TabNavigator from '../Tabs'
const Stack = createNativeStackNavigator();

export default function AuthStackNavigator() {
  const {user} = useUserInfo()
  return (
    <Stack.Navigator>
      {user.isLogged ? (
        <Stack.Screen name="Tabs" component={TabNavigator} />
      ) : (
        <>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Number" component={Number} />
          <Stack.Screen name="Code" component={Code} />
          <Stack.Screen name="Gender" component={Gender} />
          <Stack.Screen name="Interests" component={Interest} />
          <Stack.Screen name="Register" component={Register} />
        </>
      )}
    </Stack.Navigator>
  );
}
