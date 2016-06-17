var express = require('express')
var router = express.Router()

/* GET list of whatever. */
router.get('/', function (req, res, next) {
  res.json({status: 'ok'})
})

module.exports = router
