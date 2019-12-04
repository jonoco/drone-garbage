const express = require('express')
const router = express.Router()

const Location = require('../models/location')

router.get('/', function(req, res, next) {
    Location.findAll()
        .then(function(locations) {
            res.render('schedule', {
                title: 'Schedule',
                locations: locations
            })
        })
})

module.exports = router