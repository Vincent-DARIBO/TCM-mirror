import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Friends from '../../screens/Friends';


const Stack = createNativeStackNavigator();

const MyFriendsStack = () => {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen  name='Friends' component={Friends}/>
      </Stack.Navigator>
    )
  }

export default MyFriendsStack;