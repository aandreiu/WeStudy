exports.view = function(req, res){
  res.render('settings', {
	'faq': [
		{ 	'question': 'What is WeStudy?',
		    'id': 'faq1'
		},
		{ 	'question': 'Is WeStudy free?',
		    'id': 'faq2'
		},
		{ 	'question': 'What can I do with WeStudy?',
		    'id': 'faq3'
		},
		{ 	'question': "How can I check my friends' progress?",
		    'id': 'faq4'
		}   	
	]
  });
};