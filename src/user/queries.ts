export const getUsers: String = "SELECT * FROM users";
export const getUserById: String = "SELECT * FROM users WHERE id = $1";
export const checkNicknameExists: String = "SELECT s FROM users s WHERE s.nickname = $1";
export const addUser: String = "INSERT INTO users (nickname, bio, password, fullname) VALUES ($1, $2, $3, $4)";
export const deleteUser: String = "DELETE FROM users WHERE id = $1";