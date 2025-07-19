const Booking = require('../models/bookingModel');

exports.getBookings = async (req, res) => {
  try {
    const bookings = await Booking.getAllBookings();
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createBooking = async (req, res) => {
  try {
    const booking = req.body;
    const result = await Booking.addBooking(booking);
    res.status(201).json({ message: "Booking created successfully", id: result.insertId });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
