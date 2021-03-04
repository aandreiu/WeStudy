var data = require('../taskdata.json');
var data2 = require('../futuretasksdata.json');
var awarddata = require('../routes/awards.js');
var numTasks = data.numTasks;
var numFuture = data2.numFuture;

exports.viewTasks = function(req, res){
	console.log(data);
  	res.render('tasks', data);
 };

exports.viewFutureTasks = function(req, res){
	console.log(data);
  	res.render('futuretasks', data2);
 };

exports.addTask = function(request, response) {    
	// Your code goes here
	var newTask = {
		"taskName": request.query.task,
	};
	console.log(newTask);
	data.tasks.push(newTask);
	numTasks++;
	data.numTasks.replace(numTasks);
	if(numTasks >= 1 || 5) {
		awarddata.addReward();
	};
	response.render('tasks',data);
 };

exports.addFutureTask = function(request, response) {    
	// Your code goes here
	var newTask = {
		"taskName": request.query.task,
		"duedate": request.query.duedate,
	};
	console.log(newTask);
	data.futuretasks.push(newTask);
	numFuture++;
	data.numFuture.replace(numFuture);
	response.render('futuretasks',data2);
 }