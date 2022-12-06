import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/home/Home';
import EditProfile from '../screens/profile/EditProfile';
import Foundation from "react-native-vector-icons/Foundation"
import Ionicons from "react-native-vector-icons/Ionicons"
import { blue, white } from '../constants/colors';
import ProfileDetails from '../screens/profile/ProfileDetails';
const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: blue,
      },
      headerTintColor: white
    }}>
       <Tab.Screen name="Profile Details" component={ProfileDetails} options={{
         tabBarLabel: "Details",
         tabBarIcon: (props) => <Foundation name="clipboard-notes" size={20} color={props.color}/>
         
        }} />
        <Tab.Screen name="Profile" component={EditProfile} options={{
          tabBarLabel: "Profile",
          tabBarIcon: (props) => <Ionicons name="person" size={20} color={props.color}/>
          
        }} />
      <Tab.Screen name="Home" component={Home} />
    </Tab.Navigator>
  );
}
