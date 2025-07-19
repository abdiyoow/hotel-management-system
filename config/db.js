const mysql = require('mysql2/promise');
const dotenv = require('dotenv');
dotenv.config();

// Auto-detect DB credentials or fallback
const host = process.env.DB_HOST || 'localhost';
const user = process.env.DB_USER || 'root';
const password = process.env.DB_PASSWORD || ''; // fallback: blank password
const database = process.env.DB_NAME || 'hotel_management';

const pool = mysql.createPool({
  host,
  user,
  password,
  database,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

pool.getConnection()
  .then(conn => {
    console.log(`✅ Connected to MySQL as ${user}@${host} → DB: ${database}`);
    conn.release();
  })
  .catch(err => {
    console.error('🔥 Failed MySQL connection:', err.message);
  });

module.exports = pool;
