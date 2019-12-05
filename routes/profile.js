const express = require('express');
const router = express.Router();
const User = require('../models/user')


router.get('/', function(req, res, next) 
{
    if (req.session.user) 
    {
        User.findOne({ where: { username: req.session.user.username }})
            .then(function(user) {
                if (!user) {
                    return res.status(404).send('No user found')
                }
                
                req.session.user = user
                res.render('profile', { 
                    title: 'Profile', 
                    bioForm: `/profile/bio/${user.username}`, 
                    imageForm: `/profile/image/${user.username}`, 
                    user: user
                })
            })
    } 
    else
    {
        res.redirect('/')
    }
})

router.post('/bio/:user', function(req, res, next) {
    const username = req.params.user
    if (username) 
    {
        //Update the users Bio to match what the user has typed into the userBio textbox
        User.findOne({ where: { username }})
            .then(function(user) {
                user.bio = req.body.userBio
                user.save().then(function() {
                    res.redirect('/profile')      
                }) 
            })
        } 
    else 
    {
        res.status(404).send('Username not found')
    }
})

router.post('/image/:user', function(req, res, next) {
    const username = req.params.user
    if (username) 
    {    
        if (!req.files)
            return res.status(400).send('Bad request')

        User.findOne({ where: { username }})
            .then(function(user) {
                user.image = req.files.image.data
                user.save().then(function() {
                    res.redirect('/profile')      
                }) 
            })  
    } 
    else {
        res.status(404).send('Username not found')
    }
})

module.exports = router;
