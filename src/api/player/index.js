var express = require('express');
var router = express.Router();
var services = require('./services.js');

router.get('/createPlayer', function(req, res) {
	if (req.query.name && req.query.password) {
		services.createUser({
			name: req.query.name,
			password: req.query.password
		}).then(function(resolved) {
			res.json({
				"status": "success"
			});
		}).catch(function(reason) {
			res.json({
				"status": "failedDB"
			});
		})
	} else {
		res.json({
			"status": "incompleteQuery"
		});
	}
});

router.get('/login', function(req, res) {
	if (req.query.name && req.query.password) {
		services.login({
			name: req.query.name,
			password: req.query.password
		}).then(function(results) {
			if (results.length) {
				if (results[0].password === req.query.password) {
					var Player = results[0];
					delete Player['password'];
					res.json({
						"status": "success",
						"data": Player
					});
				} else {
					res.json({
						"status": "wrongPassword"
					});
				}
			} else {
				res.json({
					"status": "userDoesNotExist"
				});
			}
		}).catch(function(reason) {
			console.log("error : ", reason);
			res.json({
				"status": "failedDB"
			});
		});
	} else {
		res.json({
			"status": "incompleteQuery"
		});
	}
});

module.exports = router;