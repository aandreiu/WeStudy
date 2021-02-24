var data = require('../groupdata.json');

exports.view = function(req, res){
	console.log(data);
  	res.render('groups', data);
 };