var data = require('../awarddata.json');

exports.view = function(req, res){
	console.log(data);
  	res.render('awards', data);
 };