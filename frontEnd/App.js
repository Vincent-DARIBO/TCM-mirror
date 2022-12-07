import 'react-native-gesture-handler';

import 'react-native-gesture-handler';
import React from 'react';
import TabNavigator from './src/navigation/Tabs';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-native-paper';

export default function App() {
  console.log('app');
  return (
    <Provider>
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </Provider>
  );
}
