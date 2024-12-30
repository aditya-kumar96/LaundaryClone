import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../home/HomeScreen';
import PickUpScreen from '../pickup/PickUpScreen';
import CartScreen from '../cart/CartScreen';


const StackNavigator = () => {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer >
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name='Home' component={HomeScreen} />
                <Stack.Screen name='PickUp' component={PickUpScreen} />
                <Stack.Screen name='Cart' component={CartScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StackNavigator