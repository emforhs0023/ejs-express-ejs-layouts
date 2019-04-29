var express = require("express");
var path = require('path');
var app = express();
var ejs = require("ejs")
var expressLayouts = require('express-ejs-layouts');
var cors = require("cors");
var session = require("express-session");
var flash = require('connect-flash');
var http = require("http").Server(app);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


//세션 설정
app.use(session({
    secret: '@#@$MYSIGN#@$#$',
    resave: false,
    saveUninitialized: true
}))

app.use(expressLayouts);

app.use(flash());
app.use('/static', express.static(path.join(__dirname, 'public')));
app.use("/css", express.static(__dirname + "/node_modules/jquery-ui-dist"));
app.use("/css", express.static(__dirname+ "/node_modules/bootstrap/dist/css"));
app.use("/js", express.static(__dirname + "/node_modules/jquery/dist"));
app.use("/js", express.static(__dirname + "/node_modules/jquery-ui-dist"));
app.use("/js", express.static(__dirname + "/node_modules/bootstrap/dist/js"));

var loginRoute = require("./route/loginRoute");

app.use("/login", loginRoute);

http.listen(9008, "0.0.0.0", function(){
	console.log("server start 9008");
});
