const getUsers: String = "SELECT * FROM users";
const getUserById: String = "SELECT * FROM users WHERE id = $1";
const checkNicknameExists: String = "SELECT s FROM users s WHERE s.nickname = $1";
const addUser: String = "INSERT INTO users (nickname, bio, password, fullname) VALUES ($1, $2, $3, $4)";
const deleteUser: String = "DELETE FROM users WHERE id = $1";

module.exports = {
    getUsers, getUserById, checkNicknameExists, addUser, deleteUser,
};