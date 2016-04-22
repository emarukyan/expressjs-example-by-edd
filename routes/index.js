var express = require('express')
var router = express.Router()

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('front/index', { title: 'Armacad' })
})

module.exports = router
