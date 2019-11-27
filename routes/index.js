var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    let name
    if (req.session.user) {
        name = req.session.user.username
    }

    res.render('index', { title: 'Drone Garbage', user: name });
});

module.exports = router;
