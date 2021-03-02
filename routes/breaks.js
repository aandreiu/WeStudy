var data = require('../breakdata.json');

exports.view = function(req, res){
	console.log(data);
  	res.render('breaks', data);
 };