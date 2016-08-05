var express = require('express');
var app = express();

// GLOBAL DEFINITIONS
var PORT = 3000;

// routes
var playerRoutes = require('./api/player');


// applying api routes
app.use('/player', playerRoutes);


// additional server routes
app.get('/', function(req, res) {
	res.sendFile(__dirname+'/client/index.html');
});

app.use('/js',express.static(__dirname + '/client/js'));

app.listen(PORT, function() {
	console.log("Server Started! Listening on ",PORT);
});