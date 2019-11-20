const express = require('express');
const router = express.Router();
const User = require('../models/user')

/* GET users listing. */
router.get('/', function(req, res, next) {
  User.findAll().then(users => {
    console.log(`request for users: ${users}`)
    res.json(JSON.stringify(users, null, 4));
  })
});

module.exports = router;
