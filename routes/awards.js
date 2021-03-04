var data = require('../awarddata.json');
var data2 = require('../friendawarddata.json');
var data3 = require('../groupawarddata.json');

exports.view = function(req, res){
	console.log(data);
  	res.render('awards', data);
 };

exports.viewFriends = function(req,res){
 	res.render('friend-awards', data2);
 };

 exports.viewGroups = function(req,res){
 	res.render('group-awards', data3);
 };

