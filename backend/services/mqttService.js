const mqtt = require('mqtt');
const { MQTT_BROKER_URL } = require('../config');

const mqttService = {
	client: null,

	connect: () => {
		mqttService.client = mqtt.connect(MQTT_BROKER_URL);

		mqttService.client.on('connect', () => {
		console.log('Connected to MQTT broker');
		});

		mqttService.client.on('error', (err) => {
			console.error('MQTT connection error:', err);
		});
	},

	publish: (topic, message) => {
		if (mqttService.client) {
			mqttService.client.publish(topic, message, (err) => {
				if (err) {
					console.error('MQTT publish error:', err);
				}
			});
		}
	},
};

module.exports = mqttService;
