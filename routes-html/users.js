var express = require('express')
var router = express.Router()
// var models = require('../models')

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource')
})

/* GET SINGLE user info. */
router.get('/:user_id', function (req, res, next) {
  var user_id = parseInt(req.params.user_id, 10) || 0
  if (user_id !== 0) {
    /* models.Users.findOne({id: user_id}).then(function (user) {
    	res.json(user)
    })*/
    res.send('user info for user: ' + user_id)
  } else {
    res.send('Invalid user id.')
  }
})

module.exports = router
