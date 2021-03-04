var data = require('../frienddata.json');

exports.view = function(req, res){
    console.log(data);
  	res.render('profile', data);
 };

exports.viewGroup = function(req, res){
    console.log(data);
  	res.render('groupprofile', data);
 };