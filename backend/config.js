require('dotenv').config();

module.exports = {
	PORT: process.env.PORT || 5000,
	MONGO_URI: process.env.MONGO_URI,
	JWT_SECRET: process.env.JWT_SECRET,
	MQTT_BROKER_URL: process.env.MQTT_BROKER_URL,
};
