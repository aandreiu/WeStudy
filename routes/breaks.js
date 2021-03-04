var data = require('../breakdata.json');
var breaks = data.numBreak;

exports.view = function(req, res){
	console.log(data);
  	res.render('breaks', data);
 };

exports.addBreak = function(request, response) {    
	// Your code goes here
	var newBreak = {
		"what": request.query.what,
		"start": request.query.starttime,
		"end": request.query.endtime,
	};
	console.log(newBreak);
	data.breaks.push(newBreak);
	breaks++;
	data.numBreak.replace(breaks);
	response.render('breaks',data);
 }