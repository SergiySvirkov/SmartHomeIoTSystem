const app = require('./app');
const { PORT } = require('./config');
const mqttService = require('./services/mqttService');

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
	mqttService.connect();
});
