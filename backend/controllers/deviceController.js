const Device = require('../models/deviceModel');
const mqttService = require('../services/mqttService');

exports.getDevices = async (req, res) => {
	try {
		const devices = await Device.find();
		res.json(devices);
	} catch (error) {
		res.status(500).json({ message: 'Server error' });
	}
};

exports.toggleDevice = async (req, res) => {
	const { id } = req.params;
	try {
		const device = await Device.findById(id);
		if (!device) {
			return res.status(404).json({ message: 'Device not found' });
		}

		device.status = device.status === 'on' ? 'off' : 'on';
		await device.save();

		mqttService.publish(`devices/${id}/status`, device.status);

		res.json(device);
	} catch (error) {
		res.status(500).json({ message: 'Server error' });
	}
};
