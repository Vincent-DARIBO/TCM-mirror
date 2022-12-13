import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../../screens/home/Home';
import Login from '../../screens/Login';

const Stack = createNativeStackNavigator();

const MeetStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Home' component={Home} options={{}} />
      <Stack.Screen name='Login' component={Login} options={{}} />
    </Stack.Navigator>
  )
}

export default MeetStack;