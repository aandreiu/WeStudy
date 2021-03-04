var data = require('../awarddata.json');
var data2 = require('../taskdata.json');
var data3 = require('../groupdata.json');
var data4 = require('../frienddata.json');

exports.view = function(req, res){
	console.log(data);
  	res.render('awards', data);
 };

exports.viewFriends = function(req,res){
 	res.render('friend-awards');
 };

 exports.viewGroups = function(req,res){
 	res.render('group-awards');
 };

 exports.addReward = function(req,res){
 	function hep(object,replacevalue) {
 	 	for(var x in data.awards){
 			if (data.hasOwnProperty(x)) {
 				if (typeof object[x] == 'object') {
 					hep(object[x], replacevalue)
 			}
 			if (object[x] == "") {
 				object["dateEarned"] = replacevalue;
 				break;	
 			}
 		}
 	}
 	}

 }