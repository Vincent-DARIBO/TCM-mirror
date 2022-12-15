import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Friends from '../../screens/Friends';
import Settings from '../../screens/Settings';


const Stack = createNativeStackNavigator();

const MyAccountStack = () => {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen  name='Settings' component={Settings}/>
          <Stack.Screen  name='Friends' component={Friends}/>
      </Stack.Navigator>
    )
  }

export default MyAccountStack;