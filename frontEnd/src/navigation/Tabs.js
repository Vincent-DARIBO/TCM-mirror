import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Chat from '../screens/Chat';
import Number from '../screens/Number'

const Stack = createNativeStackNavigator();

export default function TabNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Number" component={Number} />
      <Stack.Screen name="Chat" component={Chat} />
    </Stack.Navigator>
  );
}