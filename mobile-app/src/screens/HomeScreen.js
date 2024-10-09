import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import DeviceControl from '../components/DeviceControl';
import apiService from '../services/apiService';

const HomeScreen = () => {
	const [devices, setDevices] = useState([]);

	useEffect(() => {
		const fetchDevices = async () => {
			const fetchedDevices = await apiService.getDevices();
			setDevices(fetchedDevices);
		};

		fetchDevices();
	}, []);

	const handleToggle = async (deviceId) => {
		const updatedDevice = await apiService.toggleDevice(deviceId);
		setDevices((prevDevices) =>
			prevDevices.map((device) =>
			device.id === deviceId ? updatedDevice : device
			)
		);
	};

	return (
		<View style={styles.container}>
		<Text style={styles.title}>Smart Home Devices</Text>
		<FlatList
		data={devices}
		keyExtractor={(item) => item.id}
		renderItem={({ item }) => (
		<DeviceControl device={item} onToggle={handleToggle} />
		)}
		/>
		</View>
	);
};

const styles = StyleSheet.create({
container: {
flex: 1,
padding: 20,
},
title: {
fontSize: 24,
marginBottom: 20,
textAlign: 'center',
},
});

export default HomeScreen;
