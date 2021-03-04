exports.view = function(req, res){
  res.render('settings', {
	'faq': [
		{ 	'question': 'What is WeStudy used for?',
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
		},
		{
			'question': "How can I see my future tasks for the week?",
		    'id': 'faq5'	
		},
		{
			'question': "How can I earn awards?",
		    'id': 'faq6'
		},
		{
			'question': "How can I schedule a break?",
		    'id': 'faq7'	
		}  	
	]
  });
};