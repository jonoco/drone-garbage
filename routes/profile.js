const express = require('express');
const router = express.Router();
const User = require('../models/user')

router.get('/:user', function(req, res, next) 
{
    const username = req.params.user
    
    User.findOne({ where: { username: username }}).then(function(user) 
    {
        if (!user) 
        {
            res.status(404)
            res.redirect('/')
        } 
        else 
        {
            res.render('profile', { title: 'Drone Garbage', user: user })
        }
            
        }).catch(function(error) 
        {
            res.send(error)
        })
})

router.get('/', function(req, res, next) 
{
    let user
    if (req.session.user) 
    {
        user = req.session.user
    }

    res.render('profile', { title: 'Drone Garbage', user });
})

router.post('/', function(req, res, next) 
{
    let curUser
    if (req.session.user) 
    {
        curUser = req.session.user
    
        if(req.body.btn == 'submitPhoto') 
        {
            res.render('profile', { title: 'PHOTO UPDATED', curUser})
        }
        else if(req.body.btn == 'submitBio')
        {
            //Update the users Bio to match what the user has typed into the userBio textbox
            User.update({bio: req.body.userBio},{where: {username: curUser.username}}).then(function(tmp)
            {
                //.then returns once update is completed
                req.session.user.bio = req.body.userBio
                curUser.bio = req.body.userBio

                //Update the sessions with the updated user
                User.findOne({where: { username: curUser.username }}).then(function(user) 
                {
                    if (!user) 
                    {
                        res.status(400)
                        res.render('login', 
                        {
                            error: { nouser: 'username not found' }
                        })
                    } 
                    else 
                    {
                        req.session.user = user
                        res.render('profile', { title: 'Drone Garbage', user})
                    }
                })
            })
        }  
    }  
})



module.exports = router;
