var con = require("./db_connect");
const constants = require("../constants");

function authenticateUser(user) {
    return new Promise((resolve, reject) => {
        let sql = constants.authSql;
        con.query(sql, [user.username, user.password], (err, rows) => {
            if (err) {
                reject(err);
            } else {
                resolve(rows);
            }
        });
    });
};

module.exports = {
    authenticateUser: authenticateUser,
};