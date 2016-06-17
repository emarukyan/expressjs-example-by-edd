var express = require('express')
var router = express.Router()

/* GET home page. */
router.get('/', function (req, res, next) {
  // TODO: Remove if
  if (req.query.flash) {
    req.flash('info', 'Flash Message')
  }

  res.render('front/index', { title: 'My App' })
})

module.exports = router
