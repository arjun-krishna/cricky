/**
	Follow sqlSetup first
*/
var Sequelize = require('sequelize');

var sequelize = new Sequelize('cricky', 'cricky', 'cricky',{
	// logging : false
});

// Sync models
require('./models/player.model.js')(sequelize);

module.exports = sequelize;
