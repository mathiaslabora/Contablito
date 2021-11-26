const express = require('express');
const router = express.Router();


router.get('/', function(req, res) {
    res.render('index');
});

router.get('/index2', function(req, res) {
    res.render('index2');
});

module.exports = router;