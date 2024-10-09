import mqtt from 'mqtt';

const MQTT_BROKER_URL = 'mqtt://your-mqtt-broker-url';

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

	subscribe: (topic, callback) => {
		if (mqttService.client) {
		mqttService.client.subscribe(topic, (err) => {
			if (err) {
				console.error('MQTT subscription error:', err);
			}
		});

		mqttService.client.on('message', (topic, message) => {
			callback(topic, message.toString());
		});
		}
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

export default mqttService;
