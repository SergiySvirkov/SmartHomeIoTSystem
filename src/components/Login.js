import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const Login = ({ navigation }) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleLogin = () => {
		// Implement login logic here
		navigation.navigate('Home');
	};

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Login</Text>
			<TextInput
			style={styles.input}
			placeholder="Email"
			value={email}
			onChangeText={setEmail}
			/>
			<TextInput
			style={styles.input}
			placeholder="Password"
			value={password}
			onChangeText={setPassword}
			secureTextEntry
			/>
			<Button title="Login" onPress={handleLogin} />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		padding: 20,
	},
	title: {
		fontSize: 24,
		marginBottom: 20,
		textAlign: 'center',
	},
	input: {
		height: 40,
		borderColor: '#ccc',
		borderWidth: 1,
		marginBottom: 10,
		paddingHorizontal: 10,
	},
});

export default Login;
