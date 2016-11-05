//Primary Node.js server

var express  = require('express');
var app      = express();// create our app w/ express
var port  	 = process.env.PORT || 8080;// set the port

var morgan = require('morgan'); // log requests to the console (express4)
var bodyParser = require('body-parser'); // pull information from HTML POST (express4)
var methodOverride = require('method-override'); // simulate DELETE and PUT (express4)
//var path = require('path');

app.use(express.static(__dirname + '/cnntweet'));
app.use(morgan('dev'));  // log every request to the console
app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(methodOverride());
app.use(express.static('.')); //load all static files or files bootstrapped in file directory

// serve up the application -------------------------------------------------------------
app.get('/', function(req, res) {
    res.sendfile('./index.html'); // load the single view file (angular will handle the page changes on the front-end)
});

// listen (start app with node server.js) ======================================
app.listen(port);
console.log("CNN Digital - Twitter App listening on port " + port);