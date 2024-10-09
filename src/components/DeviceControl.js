import React from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';

const DeviceControl = ({ device, onToggle }) => {
	return (
		<View style={styles.container}>
			<Text style={styles.deviceName}>{device.name}</Text>
			<Switch
				value={device.status === 'on'}
				onValueChange={() => onToggle(device.id)}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
			flexDirection: 'row',
			justifyContent: 'space-between',
			alignItems: 'center',
			padding: 10,
			marginVertical: 5,
			backgroundColor: '#f9f9f9',
			borderRadius: 5,
		},
		deviceName: {
			fontSize: 16,
	},
});

export default DeviceControl;
