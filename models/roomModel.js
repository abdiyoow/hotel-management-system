const db = require('../config/db');

const getAllRooms = () => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM rooms', (err, results) => {
      if (err) reject(err);
      else resolve(results);
    });
  });
};

const addRoom = (room) => {
  return new Promise((resolve, reject) => {
    db.query('INSERT INTO rooms SET ?', room, (err, result) => {
      if (err) reject(err);
      else resolve(result);
    });
  });
};

module.exports = { getAllRooms, addRoom };
