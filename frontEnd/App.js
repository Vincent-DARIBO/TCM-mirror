import 'react-native-gesture-handler';

import 'react-native-gesture-handler';
import React from 'react';
import TabNavigator from './src/navigation/Tabs';
<<<<<<< HEAD
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-native-paper';
=======
import Home from './src/screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-native-paper';
>>>>>>> origin/MarcelTest

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
