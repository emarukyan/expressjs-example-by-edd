var express = require('express')
var app = module.exports = express()
var models = require('../models')
var md5 = require('md5')

function generateUserKey (user, req) {
  return md5(user.id + '-' + req.remoteAddress + '-' + new Date())
}

// /localhost/api/v1/login
app.post('/login', function (req, res, next) {
  var clientId = parseInt(req.body.cliendId, 10) || 0
  var clientSecret = req.body.clientSecret || ''
  if (clientId === 0 || clientSecret === '') {
    return res.json({
      status: 'error',
      message: 'wrong credentials'
    })
  }

  models.users.findOne({
    where: {
      clientId,
      clientSecret
    }
  }).then(user => {
    if (user) {
      var authKey = generateUserKey(user, req)
      models.Keys.create({
        user_id: user.id,
        key: authKey
      }).then(() => {
        res.json({
          status: 'ok',
          authKey: authKey
        })
      })
    } else {
      res.status = 403
      return res.json({
        status: 'error',
        message: 'wrong credentials'
      })
    }
  }).catch(err => {
    next(err)
  })
})

// /localhost/api/v1/cars
app.use('*', function (req, res, next) {
  if (req.headres.authKey) {
    models.Keys.findOne(req.headres.authKey).then(kk => {
      if (kk) {
        req.user_id = kk.user_id
        next()
      }
    }).catch(err => {
      next(err)
    })
  } else {
    next(new Error('Not authorised.'))
  }
})

app.use('/', require('./index'))
