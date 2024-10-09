const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config');

exports.register = async (req, res) => {
	const { name, email, password } = req.body;
	try {
		const user = new User({ name, email, password });
		await user.save();
		res.status(201).json({ message: 'User registered successfully' });
	} catch (error) {
		res.status(500).json({ message: 'Server error' });
	}
};

exports.login = async (req, res) => {
	const { email, password } = req.body;
	try {
		const user = await User.findOne({ email });
		if (!user || !(await user.comparePassword(password))) {
			return res.status(401).json({ message: 'Invalid credentials' });
		}

		const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '1h' });
		res.json({ token });
	} catch (error) {
		res.status(500).json({ message: 'Server error' });
	}
};
