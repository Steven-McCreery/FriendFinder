
var path = require("path");

var friends = require("../data/friends");


module.exports = function(app) {

	app.get("/", function(req, res) {
		res.json(friends);
	})


}