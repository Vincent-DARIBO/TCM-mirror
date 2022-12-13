import 'react-native-gesture-handler';

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-native-paper';
import {StatusBar} from 'react-native';
import {QueryClient, QueryClientProvider, useQuery} from 'react-query';

const queryClient = new QueryClient();

import TabNavigator from './src/navigation/Tabs';
import AuthStackNavigator from './src/navigation/Stacks/Auth';
export default function App() {
  console.log('app');
  return (
    <QueryClientProvider client={queryClient}>
      <Provider>
        <StatusBar backgroundColor={'#eaeaea'} barStyle={'dark-content'} />
        <NavigationContainer>
          <AuthStackNavigator />
        </NavigationContainer>
      </Provider>
    </QueryClientProvider>
  );
}
