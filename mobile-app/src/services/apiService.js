import axios from 'axios';

const API_URL = 'http://my-backend-server.com/api';

const apiService = {
	login: async (email, password) => {
		try {
			const response = await axios.post(`${API_URL}/auth/login`, { email, password });
			return response.data;
		} catch (error) {
			console.error('Login error:', error);
			throw error;
		}
	},

	getDevices: async () => {
		try {
			const response = await axios.get(`${API_URL}/devices`, {
				headers: {
					Authorization: `Bearer ${yourToken}`, // Replace with actual token management
				},
			});
			return response.data;
		} catch (error) {
			console.error('Get devices error:', error);
			throw error;
		}
	},

	toggleDevice: async (deviceId) => {
		try {
			const response = await axios.post(`${API_URL}/devices/${deviceId}/toggle`, {}, {
			headers: {
				Authorization: `Bearer ${yourToken}`, // Replace with actual token management
			},
		});
		return response.data;
		} catch (error) {
			console.error('Toggle device error:', error);
			throw error;
		}
	},
};

export default apiService;
