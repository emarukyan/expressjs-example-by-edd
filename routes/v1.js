var express = require('express'),
	router = express.Router(),
	app = module.exports = express();


var index = require('./index'),
	users = require('./users');	


app.use('/', index);
app.use('/users', users);
