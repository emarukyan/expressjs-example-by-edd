var express = require('express')
var app = module.exports = express()

app.use('/', require('./index'))
app.use('/auth', require('./auth'))
app.use('/users', require('./users'))
app.use('/search', require('./search'))
