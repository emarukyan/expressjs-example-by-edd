var express = require('express')
var router = express.Router()
var Promise = require('bluebird')
var models = require('../models')

var listsAreLoaded = false
var studyFields
var disciplins
var eligibleCountry
var hostCountry

function loadLists () {
  return Promise.coroutine(function * () {
    studyFields = yield models.study_field.findAll({attributes: ['id', 'name'], raw: true})
    disciplins = yield models.announcement_disciplin.findAll({attributes: ['id', 'name'], raw: true})
    eligibleCountry = yield models.eligible_country.findAll({attributes: ['country_id', 'short_name'], raw: true})
    hostCountry = yield models.countries.findAll({attributes: ['country_id', 'short_name'], raw: true})

    listsAreLoaded = true
  })()
}

router.get('*', function (req, res, next) {
  Promise.resolve().then(() => {
    if (!listsAreLoaded) {
      console.log('Preloader: Loading Lists')
      return loadLists()
    }
  }).then(() => {
    res.locals.studyFields = studyFields || []
    res.locals.disciplins = disciplins || []
    res.locals.eligibleCountry = eligibleCountry || []
    res.locals.hostCountry = hostCountry || []
    next()
  }).catch(err => {
    next(err)
  })
})

module.exports = router
