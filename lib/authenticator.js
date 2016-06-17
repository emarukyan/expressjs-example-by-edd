var env = process.env.NODE_ENV || 'development'
var config = require(__dirname + '/../config/config.json')[env]

var express = require('express')
var app = module.exports = express()
var models = require('../models')
var passport = require('passport')
var LocalStrategy = require('passport-local').Strategy
var FacebookStrategy = require('passport-facebook').Strategy
var session = require('express-session')

// Session!
var sessionOptions = {
  secret: 'A!S1312VV31S@2123908jslKDJ)',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}
// Enable Redis session only in production
if (app.get('env') !== 'development') {
  var RedisStore = require('connect-redis')(session)
  var RedisConnections = require('../lib/redis')
  sessionOptions.store = new RedisStore({client: RedisConnections.redis})
}

// TODO: Remove this variable!
var testUser = {
  id: 1,
  username: 'a@a.com',
  password: 'a',
  name: 'Test User'
}

passport.serializeUser(function (user, done) {
  done(null, user.id)
})

passport.deserializeUser(function (id, done) {
  // TODO: Remove this if
  if (id === testUser.id) {
    return done(null, testUser)
  }

  models.user.findById(id).then(user => {
    done(null, user)
  }).catch(err => {
    done(err)
  })
})

passport.use(new FacebookStrategy({
  clientID: config.FACEBOOK_APP_ID,
  clientSecret: config.FACEBOOK_APP_SECRET,
  callbackURL: config.protocol + '://' + config.host + '/auth/facebook/callback'
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
    // TODO: Remove this if!
    if (username === testUser.username && password === testUser.password) {
      return done(null, testUser)
    }

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

app.use(session(sessionOptions))
app.use(passport.initialize())
app.use(passport.session())

app.use('*', function (req, res, next) {
  if (req.user) {
    res.locals.currentUser = req.user
  }
  next()
})
