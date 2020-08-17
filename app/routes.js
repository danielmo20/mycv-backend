var Comments = require('./models/comments');

module.exports = function(app) {

	app.post('/api/comments', function(req, res) {	
	console.log(req.body);		
		Comments.create({
			fullName : req.body.name,
			email : req.body.email,
			text: req.body.text
		}, function(err, todo) {
			if (err){
				res.send(err);
			}
				
			res.json({"message": "Thanks "+ req.body.name});
		});
	});
};