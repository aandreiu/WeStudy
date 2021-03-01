var data = require("../taskdata.json");

exports.addTask = function(request, response) {    
	// Your code goes here
	var newTask = {
		"taskName": request.query.task,
	};
	console.log(newTask);
	data.tasks.push(newTask);
	response.render('tasks',data);
 }