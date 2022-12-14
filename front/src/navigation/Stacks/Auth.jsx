import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../../screens/Login';
import Number from '../../screens/Number';
import Register from '../../screens/profile/Register';
import Code from '../../screens/Code';
import Gender from '../../screens/Gender';
import UserInfoProvider from '../../providers/UserInfoProvider';
import Interest from '../../screens/Interest';

const Stack = createNativeStackNavigator();

export default function AuthStackNavigator() {
  const [user, setUser] = React.useState({});

  return (
    <UserInfoProvider setUser={setUser} user={user}>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Number" component={Number} />
        <Stack.Screen name="Code" component={Code} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Gender" component={Gender} />
        <Stack.Screen name="Interests" component={Interest} />
        {/* mettre le screen profileResume */}
      </Stack.Navigator>
    </UserInfoProvider>
  );
}
