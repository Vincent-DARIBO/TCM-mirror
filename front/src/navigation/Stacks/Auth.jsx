import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Number from '../../screens/Number'
import Register from '../../screens/profile/Register';
import Code from '../../screens/Code';
import Iam from '../../screens/Iam';

const Stack = createNativeStackNavigator();

export default function AuthStackNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Number" component={Number} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="Code" component={Code} />
            <Stack.Screen name="Iam" component={Iam} />
        </Stack.Navigator>
    );
}