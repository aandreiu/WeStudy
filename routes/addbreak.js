var data = require("../breakdata.json");

exports.addBreak = function(request, response) {    
	// Your code goes here
	var newBreak = {
		"what": request.query.what,
		"start": request.query.starttime,
		"end": request.query.endtime,
	};
	console.log(newBreak);
	data.breaks.push(newBreak);
	response.render('breaks',data);
 }