var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "nodejs"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected ro mySql!");
});

module.exports = con;