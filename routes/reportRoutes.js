const express = require('express');
const router = express.Router();
const reportController = require('../controllers/reportController');
const authMiddleware = require('../middleware/authMiddleware');

// Admin only
router.get('/summary', authMiddleware.verifyToken, authMiddleware.allowRoles('Admin'), reportController.getSummary);

module.exports = router;
