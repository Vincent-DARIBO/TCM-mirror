import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MyMessagesStack from './Stacks/MyMessages';
import MeetStack from './Stacks/Meet';
import MyFriendsStack from './Stacks/MyFriends';
import EventsStack from './Stacks/Events';
import MyAccountStack from './Stacks/MyAccount';

import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons'
import { secondary } from '../constants/colors';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false, headerLeftLabelVisible: false, tabBarLabel: '', tabBarHideOnKeyboard: true }}>
      <Tab.Screen name="MeetStack" component={MeetStack} options={{
        tabBarIcon: (tabInfo) => {
          return (<MaterialCommunityIcons name='cards' size={30} style={{ paddingTop: 7 }} color={tabInfo.focused ? secondary : "#ADAFBB"} />)
        }
      }} />
      <Tab.Screen name="MyFriendsStack" component={MyFriendsStack} options={{
        tabBarIcon: (tabInfo) => {
          return (<MaterialCommunityIcons name='heart-plus' size={30} style={{ paddingTop: 7 }} color={tabInfo.focused ? secondary : "#ADAFBB"} />)
        }
      }} />
      <Tab.Screen name="Events" component={EventsStack} options={{
        tabBarIcon: (tabInfo) => {
          return (<MaterialCommunityIcons name='calendar-month' size={30} style={{ paddingTop: 7 }} color={tabInfo.focused ? secondary : "#ADAFBB"} />)
        }
      }} />
      <Tab.Screen name="MyMessages" component={MyMessagesStack} options={{
        tabBarIcon: (tabInfo) => {
          return (<Ionicons name='chatbubble-ellipses' size={27} style={{ paddingTop: 7 }} color={tabInfo.focused ? secondary : "#ADAFBB"} />)
        }
      }} />
      <Tab.Screen name="MyAccount" component={MyAccountStack} options={{
        tabBarIcon: (tabInfo) => {
          return (<MaterialCommunityIcons name='account' size={30} style={{ paddingTop: 7 }} color={tabInfo.focused ? secondary : "#ADAFBB"} />)
        }
      }} />
    </Tab.Navigator>
  );
}
