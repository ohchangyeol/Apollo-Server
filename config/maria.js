const maria = require('mariadb/callback');
const conn = maria.createConnection({
    host : '127.0.0.1',
    port : 5000,
    user:'root',
    password:'123456',
    database: 'test',
});

module.exports = conn;