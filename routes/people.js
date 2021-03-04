var data = require('../frienddata.json');
var data2 = require('../groupdata.json');
var groups = data2.numGroups;

exports.viewGroup = function(req, res){
	console.log(data);
  	res.render('groups', data2);
 };

exports.viewFriends = function(req, res){
	console.log(data);
  	res.render('friends', data);
 };