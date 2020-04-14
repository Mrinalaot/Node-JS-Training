var express = require('express');
var userdb = require('../helpers/user_helper');
var userHelper = require('../helpers/auth_helper');
var postHelper = require('../helpers/post_helper');
var generator = require('../helpers/genrator');
const authMiddleware = require('../middleware/auth_middleware');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.send('This is your api. Please use Proper request...');
});

router.get('/users', (req, res, next) => {
    userdb.getAllUsers((rows) => {
        res.send(rows);
    });
});

router.post('/auth', (req, res, next) => {
    userHelper.authenticateUser(req.body)
        .then(result => {
            if (result.length === 0) {
                res.json({ "message": "InvlidUserCredential" });
            } else {
                var usernameCookie = req.cookies.username;
                if (usernameCookie) {
                    res.json({ "message": "CookieExist" });
                } else {
                    let randomNumber = generator.generateRandomNumber();
                    let newAuthtoken = generator.generateAuthToken(result[0].username, randomNumber);
                    res.cookie('username', result[0].username);
                    res.cookie('email', result[0].email);
                    res.cookie('auth_token', newAuthtoken, { maxAge: 9990000, httpOnly: true });
                    res.json(result[0]);
                }
            }
        }).catch(err => {
            console.log(err);
        });
});

router.get('/posts', authMiddleware, (req, res, next) => {
    postHelper.getAllPosts(req.cookies.username)
        .then((rows) => {
            res.send(rows);
        });
});

router.post('/posts/new', authMiddleware, (req, res, next) => {
    postHelper.createNewPost(req.body)
        .then(result => {
            console.log("post created", result);
            res.json({ "message": "PostCreated" });
        }).catch(err => {
            console.log(err);
        });
});

module.exports = router;