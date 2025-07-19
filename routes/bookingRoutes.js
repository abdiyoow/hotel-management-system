const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/bookingController');

// GET all bookings
router.get('/', bookingController.getBookings);

// POST create a new booking (Guest/Receptionist)
router.post('/', bookingController.createBooking);

module.exports = router;
