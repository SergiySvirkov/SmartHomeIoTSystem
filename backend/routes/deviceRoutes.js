const express = require('express');
const { getDevices, toggleDevice } = require('../controllers/deviceController');
const authService = require('../services/authService');

const router = express.Router();

router.get('/', authService.verifyToken, getDevices);
router.post('/:id/toggle', authService.verifyToken, toggleDevice);

module.exports = router;
