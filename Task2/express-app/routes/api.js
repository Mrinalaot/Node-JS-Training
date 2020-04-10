var express = require('express');
var router = express.Router();
/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('This is your api. Please user proper GET request...');
});

const sampleJSON = { fullname: 'Mrinal Ghosh', email: 'Mrinal_Ghosh@epam.com' };

router.get('/userprofile', function(req, res, next) {
    res.setHeader('content-type', 'applicaton/json');
    const result = JSON.stringify(sampleJSON);
    res.send(result);
});

module.exports = router;