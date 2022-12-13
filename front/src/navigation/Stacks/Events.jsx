import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AddEvent from '../../screens/AddEvent';

const Stack = createNativeStackNavigator();

const EventsStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='AddEvent' component={AddEvent} />
    </Stack.Navigator>
  )
}

export default EventsStack;