var express = require('express');
var ctrl = express.Router();

var users = [
	{
		username: 'Testy McTestingSon',
		password: 'password'
	},
	{
		username: 'Bilbo Baggins',
		password: 'my precious'
	},
	{
		username: 'Mario',
		password: 'mushrooms'
	}
];

ctrl.get('/', function(req, res, next){
	//request
	//response
	//callback
	res.json(users);
	//res.render('view', {});
});


module.exports = ctrl;