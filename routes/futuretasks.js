var data = require('../futuretasksdata.json');

exports.view = function(req, res){
	console.log(data);
  	res.render('futuretasks', data);
 };