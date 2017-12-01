
var express = require("express");

var bodyParser = require("body-parser");

var path = require("path");

var app = express();
var port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());



require("./app/routing/apiRoutes")(app);

require("./app/routing/htmlRoutes")(app);





// *****location.reload();*****












app.listen(port, function() {
	console.log("Listening on PORT " + port);
});