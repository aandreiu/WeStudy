var data = require("../futuretasksdata.json");

exports.addFutureTask = function(request, response) {    
	// Your code goes here
	var newTask = {
		"taskName": request.query.task,
		"duedate": request.query.duedate,
	};
	console.log(newTask);
	data.futuretasks.push(newTask);
	response.render('futuretasks',data);
 }