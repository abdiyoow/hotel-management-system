const express = require('express');
const router = express.Router();
const roomController = require('../controllers/roomController');

// GET all rooms
router.get('/', roomController.getRooms);

// POST add a new room (Admin only)
router.post('/', roomController.createRoom);

module.exports = router;
