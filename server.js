var express = require('express');
var app = express();
var port = process.env.PORT || 8080;
var mongoose = require('mongoose');
var passport = require('passport');
var flash = require('connect-flash');

var morgan = require('morgan');
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");
var session = require("express-session");

//I shouldnt need this code because of line 18?
var configDB = require('./config/database.js');

////  This is the code in my config/database.js file 
// module.exports = {

//     'url' : "mongodb://localhost/loginApp"// looks like mongodb://<user>:<pass>@mongo.onmodulus.net:27017/Mikha4ot

// };

//configuration(1)
mongoose.connect(configDB.url);

//configuration(2) is this way better than line ?
// mongoose.Promise = Promise;
// var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/loginApp";
// mongoose.connect(MONGODB_URI, {
//     useMongoClient: true
// });

//have not set up PASSPORT
//require('./config/passport')(passport);//pass passport for configuration

//express application 
app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser());

app.set('view engine', 'ejs');

//requires for passport
app.use(session({ secret: 'ilovescotchscotchyscotchscotch' }));
app.use(passport.initialize());
app.use(passport.session()); //persisten login sessions
app.use(flash()); //use connect-flash for flash messages

//routes==============
require('./app/routes.js')(app, passport); //load our routes

//launch=========
app.listen(port);
console.log("App is running on" + port);