import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Activity from '../../screens/Activity';
import Home from '../../screens/home/Home';
import Login from '../../screens/Auth/Login';
import EventDescription  from '../../screens/events/EventDescription'
const Stack = createNativeStackNavigator();

const MeetStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Activity' component={Activity} options={{}} />
      <Stack.Screen name='Login' component={Login} options={{}} />
      <Stack.Screen name='Description' component={EventDescription} options={{}} />
    </Stack.Navigator>
  )
}

export default MeetStack;