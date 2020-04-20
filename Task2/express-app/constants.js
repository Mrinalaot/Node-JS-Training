const authSql = `SELECT * from users WHERE username= ? AND password= ?`;
const getAllPostSql = `SELECT * from t_posts WHERE username= ?`;
const createNewPostSql = `INSERT INTO t_posts(username, content) VALUES(?,?)`;
const getAllUsersSql = 'select * from users';
const createNewUserSql = `INSERT INTO users(username, password, name, email) VALUES(? ,? ,? ,?)`;

module.exports = {
    authSql: authSql,
    getAllPostSql: getAllPostSql,
    createNewPostSql: createNewPostSql,
    getAllUsersSql: getAllUsersSql,
    createNewUserSql: createNewUserSql,

};