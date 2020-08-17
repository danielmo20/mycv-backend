var express = require('express');
var app = express(); 								
var mongoose = require('mongoose'); 					
var port = process.env.PORT || 3000; 				
var database = require('./config/database'); 			
var bodyParser = require('body-parser');

mongoose.connect(database.url); 	

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json());

require('./app/routes.js')(app);

const server = app.listen(port, function(){
    console.log("MyCV Backend listening on port " + port);
}); 

module.exports = server;