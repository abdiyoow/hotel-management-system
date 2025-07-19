const db = require('../config/db');

const getAllBookings = () => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM bookings', (err, results) => {
      if (err) reject(err);
      else resolve(results);
    });
  });
};

const addBooking = (booking) => {
  return new Promise((resolve, reject) => {
    db.query('INSERT INTO bookings SET ?', booking, (err, result) => {
      if (err) reject(err);
      else resolve(result);
    });
  });
};

module.exports = { getAllBookings, addBooking };
