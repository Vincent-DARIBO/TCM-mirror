import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Chat from '../screens/Chat';
import Number from '../screens/Number';
import Home from '../screens/home/Home';
import Register from '../screens/profile/Register';
import ProfileDetails from '../screens/profile/ProfileDetails';
import Code from '../screens/Code';
import Iam from '../screens/Iam';
import AddEvent from '../screens/AddEvent';
import EventList from '../screens/EventList';
import HomeScreen from '../screens/Splash/HomeScreen';
import SplashScreen from '../screens/Splash/SplashScreen';
import CreateAnEventScreen from '../screens/events/CreateAnEventScreen';
import AnEventHasBeenScreen from '../screens/events/AnEventHasBeenScreen';

const Stack = createNativeStackNavigator();

export default function TabNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="Number" component={Number} />
      <Stack.Screen name="Chat" component={Chat} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Profile details" component={ProfileDetails} />
      <Stack.Screen name="Code" component={Code} />
      <Stack.Screen name="Iam" component={Iam} />
      <Stack.Screen name="AddEvent" component={AddEvent} />
      <Stack.Screen name="EventList" component={EventList} />
      <Stack.Screen
        name="CreateAnEventScreen"
        component={CreateAnEventScreen}
      />
      <Stack.Screen
        name="AnEventHasBeenScreen"
        component={AnEventHasBeenScreen}
      />
    </Stack.Navigator>
  );
}
