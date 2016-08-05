/**
	Player Model
 */
var Sequelize = require('sequelize');

/*
 ratingBat , ratingBowl indicates player Level used
 for special reasons
*/

module.exports = function(sequelize) {
	var Player = sequelize.define('players', {
		name: {
			type: Sequelize.STRING,
			allowNull: false,
			unique: true
		},
		password: {
			type: Sequelize.STRING,
			allowNull: false
		},
		careerTeamId: {
			type: Sequelize.INTEGER
		},
		ratingBat: {
			type: Sequelize.INTEGER,
			defaultValue: 0
		},
		ratingBowl: {
			type: Sequelize.INTEGER,
			defaultValue: 0
		},
		highestScore: {
			type: Sequelize.INTEGER,
			defaultValue: 0
		},
		strikeRate: {
			type: Sequelize.FLOAT,
			defaultValue: 0.0
		},
		wickets: {
			type: Sequelize.INTEGER,
			defaultValue: 0
		},
		economy: {
			type: Sequelize.FLOAT,
			defaultValue: 0.0
		}
	});
	Player.sync();
}