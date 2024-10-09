import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DeviceScreen = ({ route }) => {
	const { device } = route.params;

	return (
		<View style={styles.container}>
		<Text style={styles.title}>{device.name}</Text>
		<Text>Status: {device.status}</Text>
		{/* Additional device details and controls can be added here */}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 20,
	},
	title: {
		fontSize: 24,
		marginBottom: 20,
	},
});

export default DeviceScreen;
