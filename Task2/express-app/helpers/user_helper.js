const con = require('./db_connect');
const constants = require("../constants");

function getAllUsers(callback) {
    let sql = constants.getAllUsersSql;
    con.query(sql, (err, rows, fields) => {
        if (err) throw err;
        callback(rows);
    });
}

function createNewUser(user) {
    return new Promise((resolve, reject) => {
        let sql = createNewUserSql;
        params = [user.username, user.password, user.name, user.email];
        con.query(sql, params, (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
    });
}


module.exports = {
    getAllUsers: getAllUsers,
    createNewUser: createNewUser
}