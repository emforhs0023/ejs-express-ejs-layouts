var express = require('express');
var bodyParser = require("body-parser");
var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({extended : false})
var router = express.Router();

/* GET home page. */
router.get('/',  function(req, res, next) {
	res.render('login/index');
});

router.get('/sign_up',  function(req, res, next) {
	res.render('login/sign_up');
});


module.exports = router;
