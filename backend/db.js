const mysql = require("mysql");
const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'mysql',
    root: 'root',
    password: 'password123',
    database: 'myapp'
});

exports.pool = pool;