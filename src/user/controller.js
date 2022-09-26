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
    const { nickname, bio, password, fullname } = req.body;

    pool.query(queries.checkNicknameExists, [nickname], (error, results) => {
        if (results.rows.length) {
            res.send("Nickname already taken.");
        }
        pool.query(queries.addUser, [nickname, bio, password, fullname], (error, results) => {
            if (error) throw error;
            res.status(201).send("User created successfully.");
            console.log('user created');
        })
    });
};

const deleteUser = (req, res) => {
    const id = parseInt(req.params.id);

    pool.query(queries.getUserById, [id], (error, results) => {
        const noUserFound = !results.rows.length;
        if (noUserFound) {
            res.send("User does not exist, could not delete.");
        }

        pool.query(queries.deleteUser, [id], (error, results) => {
            if (error) throw error;
            res.status(200).send("User deleted successfully.");
        });
       
    });
}
module.exports = {
    getUsers, getUserById, addUser, deleteUser,
};