const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const deviceRoutes = require('./routes/deviceRoutes');
const userRoutes = require('./routes/userRoutes');
const { connectDB } = require('./utils/db');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use('/api/devices', deviceRoutes);
app.use('/api/users', userRoutes);

// Connect to database
connectDB();

module.exports = app;
