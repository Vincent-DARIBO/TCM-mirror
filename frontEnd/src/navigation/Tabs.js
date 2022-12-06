import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Number from '../screens/Number'
import AddEvent from '../screens/AddEvent';
import EventList from '../screens/EventList';

const Stack = createNativeStackNavigator();

export default function TabNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Number" component={Number} />
      <Stack.Screen name="AddEvent" component={AddEvent} />
      <Stack.Screen name="EventList" component={EventList} />
    </Stack.Navigator>
  );
}