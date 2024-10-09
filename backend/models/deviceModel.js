const mongoose = require('mongoose');

const deviceSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	status: {
		type: String,
		enum: ['on', 'off'],
		default: 'off',
	},
});

module.exports = mongoose.model('Device', deviceSchema);
