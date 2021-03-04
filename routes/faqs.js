var faqs = require('../faq.json');

exports.faqInfo = function(req, res) { 
	var faqID = req.params.id;
	if (faqID == "random") {
		faqID = Math.floor(Math.random() * faqs.length) + 1;
	} else {
		faqID = parseInt(faqID);
	}

  	var faq = faqs[faqID - 1];
  	res.json(faq);
}