const Pool = require('pg').Pool;

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "NeoR",
    password: "b",
    port: 5432,
});

module.exports = pool;