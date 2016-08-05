/**
	USER SERVICES
 */
var db = require('../../db');

var exports = module.exports = {};

exports.createUser = function(conditions) {
	var insertQuery = 'INSERT INTO players (name , password, createdAt , updatedAt) VALUES (:name, :password, now(), now())';
	return db.query(insertQuery, {
		replacements: conditions,
		type: db.QueryTypes.INSERT
	});
}

exports.login = function(conditions) {
	var selectQuery = 'SELECT * FROM players WHERE name = :name';
	return db.query(selectQuery, {
		replacements: conditions,
		type: db.QueryTypes.SELECT
	});
}