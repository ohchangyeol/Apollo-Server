// const maria = require('mariadb/callback');
import { createConnection } from "mariadb/callback";
const conn = createConnection({
    host : process.env.DB_HOST,
    port : process.env.DB_PORT,
    user:process.env.DB_USER,
    password:process.env.DB_PWD,
    database: process.env.DB_NAME,
});

module.exports = conn;