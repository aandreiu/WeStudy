var data = require('../taskdata.json');

exports.view = function(req, res){
	console.log(data);
  	res.render('tasks', data);
 };

 exports.viewFuture = function(req, res){
	console.log(data);
  	res.render('future-tasks', data);
 };