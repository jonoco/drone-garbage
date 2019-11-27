const express = require('express');
const router = express.Router();
const User = require('../models/user')

router.get('/:user', function(req, res, next) {
    const username = req.params.user
    
    User.findOne({ where: { username: username }})
        .then(function(user) {
            if (!user) {
                res.status(404)
                res.redirect('/')
            } else {
                res.render('profile', {
                    user: user
                })
            }
            
        }).catch(function(error) {
            res.send(error)
        })
})



module.exports = router;
