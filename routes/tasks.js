var data = require('../taskdata.json');
var data2 = require('../futuretasksdata.json');

exports.viewTasks = function(req, res){
	console.log(data);
  	res.render('tasks', data);
 };

exports.viewFutureTasks = function(req, res){
	console.log(data);
  	res.render('futuretasks', data2);
 };

exports.addTask = function(request, response) {    
	var newTask = {
		"taskName": request.query.task,
	};
	console.log(newTask);
	data.tasks.push(newTask);
	response.render('tasks',data);
 };

exports.addFutureTask = function(request, response) {    
	var newTask = {
		"taskName": request.query.task,
		"duedate": request.query.duedate,
	};
	console.log(newTask);
	data2.futuretasks.push(newTask);
	response.render('futuretasks',data2);
 }