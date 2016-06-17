var express = require('express')
var app = module.exports = express()
var models = require('../models')

app.use('/', require('./index'))
