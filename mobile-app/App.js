import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import DeviceScreen from './src/screens/DeviceScreen';
import Login from './src/components/Login';

const Stack = createStackNavigator();

export default function App() {
	return (
	<NavigationContainer>
	<Stack.Navigator initialRouteName="Login">
	<Stack.Screen name="Login" component={Login} />
	<Stack.Screen name="Home" component={HomeScreen} />
	<Stack.Screen name="Device" component={DeviceScreen} />
	</Stack.Navigator>
	</NavigationContainer>
	);
}
