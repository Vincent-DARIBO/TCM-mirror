import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Chat from '../screens/Chat';
import Number from '../screens/Number'
import Home from '../screens/home/Home';
import Register from '../screens/profile/Register';
import ProfileDetails from '../screens/profile/ProfileDetails';
import Code from '../screens/Code';
import Iam from '../screens/Iam';
import Friends from '../screens/Friends/Friends';
import Interest from '../screens/Interest';

const Stack = createNativeStackNavigator();

export default function TabNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Number" component={Number} />
      <Stack.Screen name="Chat" component={Chat} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Profile details" component={ProfileDetails} />
      <Stack.Screen name="Code" component={Code} />
      <Stack.Screen name="Iam" component={Iam} />
      <Stack.Screen name="Friends" component={Friends} />
      <Stack.Screen name="Interest" component={Interest} />
    </Stack.Navigator>
  );
}