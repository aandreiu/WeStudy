var data = require('../frienddata.json');

exports.view = function(req, res){
    console.log(data);
  	res.render('groupprofile', data);
 };