var server = require('supertest');
var should = require('chai').should();

describe("POST Comments", function() {
	this.timeout(10000);
	beforeEach( () => {
      app = require( '../server' );
   } ),

   afterEach( ( done ) => {
      delete require.cache[require.resolve( '../server' )]
      done();
     
   } ),
    it("should pass", function(done){
        server(app)
        .post('/api/comments', {
			"name" : "name",
			"email" : "email",
			"text": "text"
		})
        .end(function(err, res){
            if(err) done(err);
            res.status.should.equal(200);            
            res.body.should.be.an("object");
            res.body.should.contain.keys('message');
            
            done();
        });
    });
});