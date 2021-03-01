var taskData = require('../taskdata.json');
var futureTaskData = require('../futuretasksdata.json');

/*
 * GET home page.
 */

exports.view = function(req, res){
  	res.render('index');
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

exports.viewTasks = function(req, res){
	console.log(taskData);
  	res.render('index', taskData);
}