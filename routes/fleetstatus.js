const express = require('express')
const router = express.Router()

const Team = require('../models/team')

router.get('/', function(req, res, next) {
    Team.findAll()
        .then(function(teams) {
            res.render('fleetstatus', {
                title: 'Fleet Status',
                teams: teams
            })
        })
})

module.exports = router