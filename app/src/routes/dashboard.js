const express = require('express');
const router = express.Router();
const DashboardController = require('../controllers/dashboardController');
const { isAuthenticated } = require('../middlewares/auth');

router.get('/', isAuthenticated, DashboardController.index);

module.exports = router; 