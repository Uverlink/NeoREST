const getUsers = "SELECT * FROM users";
const getUserById = "SELECT * FROM users WHERE id = $1";
const checkNicknameExists = "SELECT s FROM users s WHERE s.nickname = $1";
module.exports = {
    getUsers, getUserById, checkNicknameExists
};