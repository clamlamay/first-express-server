var express = require('express');
var ctrl = express.Router();

/* data for our routues */

var data = [
	{
		name: 'North Coast Music Fest',
		location: 'Union Park',
		notes: 'wu tang clan aint notin to mess with'
	},
	{
		name: 'Spring Awakening',
		location: 'Soldier Field',
		notes: 'minors asking to buy booze'
	},
	{
		name: 'Marshmello',
		location: 'Concord',
		notes: 'Black Friday'
	}
];

/* build our first real API */
ctrl.get('/', function(req, res, next){
	res.json(data);
});


ctrl.get('/1', function(req, res, next){
	res.json(data[0]);
});

ctrl.get('/2', function(req, res, next){
	res.json(data[1]);
});

ctrl.get('/3', function(req, res, next){
	res.json(data[2]);
});

module.exports = ctrl;
