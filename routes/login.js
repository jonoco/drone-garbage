const express = require('express');
const router = express.Router();

const User = require('../models/user')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('login', {})
});


router.post('/', function(req, res, next) {
    if (!req.body.username) {
        res.status(400)
        res.render('login', { 
            error: { username: 'must provide a username' }
        })
        return
    } else if (!req.body.password) {
        res.status(400)
        res.render('login', {
            error: { password: 'no password found'}
        })
        return
    }

    User.findOne({
        where: { username: req.body.username }
    }).then(function(user) {
        if (!user) {
            res.status(400)
            res.render('login', {
                error: { nouser: 'username not found' }
            })
        } else if (user.password !== req.body.password) {
            res.status(400)
            res.render('login', {
                error: { nouser: 'incorrect password' }
            })
        } else {
            req.session.user = user
            res.redirect('/')
        }
    })
})

module.exports = router;
