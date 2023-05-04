const { URL } = require('url');
const { createPool, sql } = require('slonik');
const express = require('express');
require('dotenv').config();

const app = express();

const {
    DB_USER,
    DB_PW,
    DB_NAME,
    DB_HOST,
    DB_PORT,
    PORT,
} = process.env;

const url = new URL('postgres://');

url.hostname = DB_HOST;
url.username = DB_USER;
url.password = DB_PW;
url.pathname = DB_NAME;
url.port = DB_PORT;

const main = async () => {
    const pool = await createPool(url.toString());
    app.get('/', async () => {
        const result = await pool.query(sql.unsafe`SELECT 1`);
        return result.json(result);
    });
    const server = app.listen((PORT ??= 3000, PORT), () => {
        console.log(`Server is Listening on PORT ${PORT}`);
      });

    const gracefulShutdownHandler = (signal) => {
    console.log(`[${new Date().toISOString()}] ${signal} signal received: closing HTTP server`);
    server.close(() => {
        console.log('HTTP server closed');
    });
    };

    process.on('SIGTERM', gracefulShutdownHandler);
    process.on('SIGINT', gracefulShutdownHandler);
};
main();
