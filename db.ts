const Pool = require('pg').Pool;

export const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "NeoR",
    password: "b",
    port: 5432,
});