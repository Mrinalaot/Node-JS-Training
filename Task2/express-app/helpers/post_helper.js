const con = require('./db_connect');
const constants = require("../constants");

function getAllPosts(username) {
    return new Promise((resolve, reject) => {
        let sql = constants.getAllPostSql;
        con.query(sql, [username], (err, rows) => {
            if (err) {
                reject(err);
            } else {
                resolve(rows);
            }
        });
    });
}

function createNewPost(post) {
    return new Promise((resolve, reject) => {
        let sql = constants.createNewPostSql;
        con.query(sql, [post.username, post.content], (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
    });
}

module.exports = {
    getAllPosts: getAllPosts,
    createNewPost: createNewPost
}