const mysql = require('mysql2');
const dotEnv = require('dotenv');

dotEnv.config();

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  multipleStatements: true
});

module.exports = {
  dbPool: pool.promise(),
};