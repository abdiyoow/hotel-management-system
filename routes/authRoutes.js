const express = require('express');
const router = express.Router();
const db = require('../config/db'); // Make sure db.js is correct

// LOGIN ROUTE
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    console.log('📩 Login attempt:', email, password);

    // Fetch user from DB
    const [rows] = await db.query('SELECT * FROM users WHERE email = ?', [email]);
    console.log('🔍 DB Query Result:', rows);

    if (rows.length === 0) {
      console.log('❌ User not found in DB');
      return res.status(400).json({ error: 'Invalid credentials' });
    }

    const user = rows[0];

    // Compare plain text passwords
    if (password !== user.password) {
      console.log('❌ Password mismatch');
      return res.status(400).json({ error: 'Invalid credentials' });
    }

    console.log('✅ Login success');
    res.status(200).json({ message: 'Login successful', user });
  } catch (err) {
    console.error('🔥 Backend Error:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
