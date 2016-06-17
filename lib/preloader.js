'use strict'
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

function parseDefaultParams (req, res, next) {
  if (req.query['limit']) {
    let limit = parseInt(req.query['limit'], 10) || 10
    if (limit <= 0) {
      limit = 10
    }
    req.limit = limit
  } else {
    req.limit = 10
  }

  if (req.query['page']) {
    let page = parseInt(req.query['page'], 10) || 1
    if (page <= 0) {
      page = 1
    }
    req.page = page
  } else {
    req.page = 1
  }

  if (req.query['offset']) {
    let offset = parseInt(req.query['offset'], 10) || 0
    if (offset <= 0) {
      offset = 0
    }
    req.offset = offset
  } else {
    req.offset = 0
  }

  next()
}

router.get('*', parseDefaultParams, function (req, res, next) {
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
