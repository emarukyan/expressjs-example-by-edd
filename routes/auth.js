var env = process.env.NODE_ENV || 'development'
var config = require(__dirname + '/../config/config.json')[env]
var express = require('express')
var app = module.exports = express()

var models = require('../models')
var passport = require('passport')
var LocalStrategy = require('passport-local').Strategy
var FacebookStrategy = require('passport-facebook').Strategy

passport.serializeUser(function (user, done) {
  done(null, user.id)
})

passport.deserializeUser(function (id, done) {
  models.user.findById(id).then(user => {
    done(null, user)
  }).catch(err => {
    done(err)
  })
})

passport.use(new FacebookStrategy({
  clientID: config.FACEBOOK_APP_ID,
  clientSecret: config.FACEBOOK_APP_SECRET,
  callbackURL: 'http://new.armacad.info/auth/facebook/callback'
},
  function (accessToken, refreshToken, profile, done) {
    var fb_link = 'https://www.facebook.com/app_scoped_user_id/' + profile.id + '/'
    models.user.findOne({
      where: {
        fb_link
      }
    }).then(user => {
      if (user) {
        return user
      } else {
        var dName = profile.displayName || ''
        return models.user.create({
          fb_link,
          fb_connect: 1,
          first_name: dName.substr(0, dName.indexOf(' ')),
          last_name: dName.substr(dName.indexOf(' ') + 1),
          email: profile.email || ''
        })
      }
    }).then(user => {
      done(null, user)
    }).catch(err => {
      done(err)
    })
  }
))

passport.use(new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password'
},
  function (username, password, done) {
    models.user.findOne({where: {
      email: username
    }}).then(user => {
      if (!user) {
        return done(null, false, { message: 'Incorrect email.' })
      }

      user.validPassword(password, function (result) {
        if (!result) {
          return done(null, false, { message: 'Incorrect password.' })
        }
        return done(null, user)
      })
    }).catch(err => {
      done(err)
    })
  }
))

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
