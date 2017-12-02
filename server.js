
// requiring node packages
var express = require("express");

var bodyParser = require("body-parser");

var path = require("path");

// setting up express
var app = express();
var port = process.env.PORT || 3000;

// middleware 
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

// requiring routes
require("./app/routing/apiRoutes")(app);

require("./app/routing/htmlRoutes")(app);

// connection listening
app.listen(port, function() {
	console.log("Listening on PORT " + port);
});