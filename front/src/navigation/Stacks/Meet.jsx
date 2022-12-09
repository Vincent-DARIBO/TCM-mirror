import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../../screens/home/Home';

const Stack = createNativeStackNavigator();

const MeetStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Home' component={Home} options={{}} />
    </Stack.Navigator>
  )
}

export default MeetStack;