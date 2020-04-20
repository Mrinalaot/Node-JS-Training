var express = require('express');
var router = express.Router();
var path = require('path');
const userHelper = require('../helpers/user_helper');
const authMiddleware = require('../middleware/auth_middleware');
const pathToPublicDirectory = path.join(__dirname, '../', 'public');

router.get('/', (req, res, next) => {
    res.render('index', { title: 'Express' });
});

router.get('/login', (req, res) => {
    res.sendFile('login.html', {
        root: pathToPublicDirectory
    });
});

router.get('/register', (req, res) => {
    res.sendFile('registration.html', {
        root: pathToPublicDirectory
    });
});

router.post('/register', (req, res, next) => {
    userHelper.createNewUser(req.body)
        .then(result => {
            console.log("User created", result);
            res.json({ "message": "UserRegistered" });
        }).catch(err => {
            console.log(err);
        });
});

router.get('/:username', authMiddleware, (req, res, next) => {
    res.sendFile('profile.html', {
        root: pathToPublicDirectory
    });
})

module.exports = router;