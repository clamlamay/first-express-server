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


ctrl.get('/1', function(req, res, next){
	res.json(users[0]);
});


ctrl.get('/2', function(req, res, next){
	res.json(users[1]);
});

ctrl.get('/3', function(req, res, next){
	res.json(users[2]);
});



module.exports = ctrl;