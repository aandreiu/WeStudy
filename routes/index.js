var data = require('../index.json');
/*
 * GET home page.
 */

exports.view = function(req, res){
	console.log(data);
  	res.render('index', data);
 };

 /*
  * GET login page.
  */
exports.viewLogin = function(req,res){
	res.render('login');
};

 /*
  * GET signup page.
  */
exports.viewSignUp = function(req,res){
	res.render('signup');
};