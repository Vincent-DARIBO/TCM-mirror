import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AddEvent from '../../screens/AddEvent';
import EventDayDetailsYourActivity from '../../screens/EventDayDetailsYourActivity';
import YouAreSubscribedTo from '../../screens/YouAreSubscribedTo';
import EventList from '../../screens/EventList';
// import EventDescription from '../../screens/Events/EventDescription';

const Stack = createNativeStackNavigator();

const EventsStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='AddEvent' component={AddEvent} />
      <Stack.Screen name='EventDayDetailsYourActivity' component={EventDayDetailsYourActivity} />
      <Stack.Screen name='YouAreSubscribedTo' component={YouAreSubscribedTo} />
      <Stack.Screen name='EventList' component={EventList} />
      {/* <Stack.Screen name='EventDescription' component={EventDescription} /> */}
    </Stack.Navigator>
  )
}

export default EventsStack;