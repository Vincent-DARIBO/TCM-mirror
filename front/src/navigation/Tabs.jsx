import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Chat from '../screens/Chat';
import Number from '../screens/Number';
import Home from '../screens/home/Home';
import Register from '../screens/profile/Register';
import Profile from '../screens/profile/Profile';
import Code from '../screens/Code';
import AddEvent from '../screens/AddEvent';
import EventList from '../screens/EventList';
import Gender from '../screens/Gender';
import Interest from '../screens/Interest';
import ProfileResume from '../screens/ProfileResume';

const Stack = createNativeStackNavigator();

export default function TabNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Number" component={Number} />
      <Stack.Screen name="Chat" component={Chat} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Profile details" component={Profile} />
      <Stack.Screen name="Code" component={Code} />
      <Stack.Screen name="AddEvent" component={AddEvent} />
      <Stack.Screen name="EventList" component={EventList} />
      <Stack.Screen name="Gender" component={Gender} />
      <Stack.Screen name="Interest" component={Interest} />
      <Stack.Screen name="ProfileResume" component={ProfileResume} />
    </Stack.Navigator>
  );
}
