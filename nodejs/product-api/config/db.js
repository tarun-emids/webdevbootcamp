import 'dotenv/config';
import mysql from 'mysql2/promise';

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true, // wait until it is connected to the DB
    connectionLimit: 10, // maximum 10 connections allowed
    queueLimit: 0 // relatively small application so queue is not really required as of now
})

export default pool;