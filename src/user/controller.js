const pool = require('../../db');
const queries = require('./queries');

const getUsers = (req, res) => {
    pool.query(queries.getUsers, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
    console.log('getting users')
};

const getUserById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getUserById, [id], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
    console.log('getting specific user')
}

const addUser = (req, res) => {
    const { nickname, bio, password, fullname } = req.body
}

module.exports = {
    getUsers, getUserById, add
};