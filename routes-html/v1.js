'use strict'
var fs = require('fs')
var path = require('path')
var app = module.exports = require('../lib/authenticator')
var flash = require('express-flash')
app.use(flash())

// Main HTML Routes
app.use('/', require('./index'))
app.use('/auth', require('./auth'))
app.use('/users', require('./users'))

/*
// Alternative method, in case all routes match fileNames
fs.readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== path.basename(__filename))
  }).forEach(file => {
    let r = file.substring(0, file.indexOf('.'))
    // app.use(`/${r}`, authStrategies.authenticate('basic', { session: false }), require(path.join(__dirname, file)))
    app.use(`/${r}`, require(path.join(__dirname, file)))
  })
*/
