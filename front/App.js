import 'react-native-gesture-handler';

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-native-paper';
import {StatusBar} from 'react-native';
import {QueryClient, QueryClientProvider, useQuery} from 'react-query';
import Clipboard from '@react-native-community/clipboard'; 

const queryClient = new QueryClient();

import TabNavigator from './src/navigation/Tabs';
import AuthStackNavigator from './src/navigation/Stacks/Auth';
import UserInfoProvider from './src/providers/UserInfoProvider';
export default function App() {
  const [user, setUser] = React.useState({isLogged: true});

  React.useEffect(() => {
    console.log({user});
  }, [user]);
  
  return (
    <UserInfoProvider setUser={setUser} user={user}>
      <QueryClientProvider client={queryClient}>
        <Provider>
          <StatusBar backgroundColor={'#eaeaea'} barStyle={'dark-content'} />
          <NavigationContainer>
            <AuthStackNavigator />
            {/* <TabNavigator/> */}
          </NavigationContainer>
        </Provider>
      </QueryClientProvider>
    </UserInfoProvider>
  );
}
