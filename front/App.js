import 'react-native-gesture-handler';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-native-paper';
import { StatusBar } from 'react-native';

import TabNavigator from './src/navigation/Tabs';
export default function App() {
  console.log('app');
  return (
    <Provider>
      <StatusBar backgroundColor={'#eaeaea'} barStyle={'dark-content'} />
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </Provider>
  );
}
