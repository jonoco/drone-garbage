const express = require('express');
const router = express.Router();
//const User = require('../models/user')

/* GET users listing. */
router.get('/', function(req, res, next) 
{
  res.render('profile', { title: 'Profile Page' });
});

module.exports = router;
