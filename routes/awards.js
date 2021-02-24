var data = require('../awarddata.json');

exports.view = function(req, res){
	console.log(data);
  	res.render('awards', data);
 };

exports.viewFriends = function(req,res){
 	res.render('friend-awards');
 }

 exports.viewGroups = function(req,res){
 	res.render('group-awards');
 }