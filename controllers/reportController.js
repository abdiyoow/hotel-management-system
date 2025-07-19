const db = require('../models/db');

exports.getSummary = (req, res) => {
    const summary = {};
    const queries = [
        `SELECT COUNT(*) AS total_rooms FROM rooms`,
        `SELECT COUNT(*) AS total_bookings FROM bookings`,
        `SELECT SUM(price) AS total_revenue
         FROM bookings b
         JOIN rooms r ON b.room_id = r.room_id
         WHERE b.status='Checked-Out'`
    ];

    let completed = 0;

    queries.forEach((query, index) => {
        db.query(query, (err, result) => {
            if (err) return res.status(500).json({ message: 'Error generating report' });
            if (index === 0) summary.total_rooms = result[0].total_rooms;
            if (index === 1) summary.total_bookings = result[0].total_bookings;
            if (index === 2) summary.total_revenue = result[0].total_revenue || 0;

            completed++;
            if (completed === queries.length) {
                res.json(summary);
            }
        });
    });
};
