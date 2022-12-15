import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Friends from '../../screens/Friends';
import Requests from '../../screens/Requests';


const Stack = createNativeStackNavigator();

const MyFriendsStack = () => {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen  name='Friends' component={Friends}/>
          <Stack.Screen  name='Requests' component={Requests}/>
      </Stack.Navigator>
    )
  }

export default MyFriendsStack;