import 'react-native-gesture-handler';

import 'react-native-gesture-handler';
import React from 'react';
import TabNavigator from './src/navigation/Tabs';
import Home from './src/screens/Home';
import {NavigationContainer} from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}
