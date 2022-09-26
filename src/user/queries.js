const getUsers = "SELECT * FROM users";
const getUserById = "SELECT * FROM users WHERE id = $1";
const checkNicknameExists = "SELECT s FROM users s WHERE s.nickname = $1";
const addUser = "INSERT INTO users (nickname, bio, password, fullname) VALUES ($1, $2, $3, $4)";
module.exports = {
    getUsers, getUserById, checkNicknameExists, addUser,
};