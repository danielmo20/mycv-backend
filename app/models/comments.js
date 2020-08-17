var mongoose = require('mongoose');

module.exports = mongoose.model('comments', {	
	fullName : String,
	email: String,
	text : String
});