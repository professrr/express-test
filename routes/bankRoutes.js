const express = require('express');
const bankController = require('../controllers/bankController');
const router = express.Router();

router.get('/exchange', bankController.exchange)

module.exports = router;