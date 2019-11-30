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
                    res.status(404)
                    res.send('No user found')
                    return
                }
                
                req.session.user = user
                res.render('profile', { title: 'Profile', form: `/profile/${user.username}`, user: user})
            })
    } 
    else
    {
        res.redirect('/')
    }
})

router.post('/:user', function(req, res, next) 
{
    const username = req.params.user
    if (username) 
    {
        console.log('user logged in')
        if(req.body.btn == 'submitPhoto') 
        {
            res.redirect('/profile')
        }
        else if(req.body.btn == 'submitBio')
        {
            //Update the users Bio to match what the user has typed into the userBio textbox
            User.findOne({where: { username }})
                .then(function(user) {
                    user.bio = req.body.userBio
                    user.save().then(function() {
                        res.redirect('/profile')      
                    }) 
                })
        }
        else
        {
            res.status(404)
            res.send('Bad request')
        }  
    } 
    else {
        res.status(404)
        res.send('Bad request')
    }
})



module.exports = router;
