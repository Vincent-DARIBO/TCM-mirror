import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Messages from '../../screens/Messages';
import Chat from '../../screens/Chat';


const Stack = createNativeStackNavigator();

const MyMessagesStack = () => {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen  name='Messages' component={Messages}/>
          <Stack.Screen  name='Chat' component={Chat}/>
      </Stack.Navigator>
    )
  }

export default MyMessagesStack;