const Room = require('../models/roomModel');

exports.getRooms = async (req, res) => {
  try {
    const rooms = await Room.getAllRooms();
    res.json(rooms);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createRoom = async (req, res) => {
  try {
    const room = req.body;
    const result = await Room.addRoom(room);
    res.status(201).json({ message: "Room added successfully", id: result.insertId });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
