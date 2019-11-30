const express = require('express');
const router = express.Router();

const User = require('../models/user')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('signup', {})
});


router.post('/', function(req, res, next) {
 
    if (!req.body.username) {
        res.status(400)
        res.render('signup', { 
            error: { username: 'must provide a username' }
        })
        return
    } else if (!req.body.password) {
        res.status(400)
        res.render('signup', {
            error: { password: 'must provide a password'}
        })
        
        return
    
    } else if (req.body.passrepeat != req.body.password  ) {
        res.status(400)
        res.render('signup', {
            error: { passrepeat: "passwords don't match"}
        })
        return
    }


  User.create({
      username: req.body.username,
      password: req.body.password

  })

  .then(function(user) {
    req.session.user = user
    res.redirect('/')
  }).catch(function(error) { // USername already exsits
    res.status(400)
    res.send('User failed to create. User already exists')
  })
})

module.exports = router;
