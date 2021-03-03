var taskData = require('../taskdata.json');
var futureTaskData = require('../futuretasksdata.json');
var breakData = require('../breakdata.json');

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

exports.viewFutureTasks = function(req, res){
	console.log(futureTaskData);
  	res.render('index', futureTaskData);
}

exports.viewBreaks = function(req, res){
	console.log(breakData);
  	res.render('index', breakData);
}