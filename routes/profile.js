const express = require('express');
const router = express.Router();
const User = require('../models/user')

/* GET Profile Page. */
router.get('/', function(req, res, next) 
{
  res.render('profile', { title: 'Profile Page' });

//  var json;

//   User.findAll().then(users => 
//   {
//     json = res.json(JSON.stringify(users, null, 4));
//   })
});

module.exports = router;
