var express = require('express')
var app = module.exports = express()
var passport = require('passport')

// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
app.get('/login', function (req, res, next) {
  return res.render('front/login')
})

app.post('/login',
  passport.authenticate('local', { successRedirect: '/',
                                   failureRedirect: '/auth/login',
                                   failureFlash: true })
)

app.get('/facebook/callback',
  passport.authenticate('facebook', { successRedirect: '/',
                                      failureRedirect: '/auth/login' }))
app.get('/facebook', passport.authenticate('facebook'))
