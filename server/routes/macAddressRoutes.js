const express = require('express');
const router = express.Router();
const macAddressController = require('../controllers/macAddressController');

router.post('/check-mac', macAddressController.checkMACAddress);

module.exports = router;
