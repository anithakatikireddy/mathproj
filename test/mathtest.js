var should = require('should');
var request = require('supertest');
//var assert = require('assert');

describe('math', function(){
 var url = 'http://localhost:8080/';
 
 // TC: add positve numbers
 it('add positive integers', function(done){
   request(url).get('add/2/4')
   .expect(200)
   .end(function(err, res){
     if(err) {
      throw err;
     }
     res.body.should.equal(6);
     //assert.equal(6, res.body);
     done();
    });
 });

 // TC- add positive and negative numbers
 it('add positive and negative integers', function(done){
   request(url).get('add/2/-4')
   .expect(200)
   .end(function(err, res){
     if(err) {
      throw err;
     }
     res.body.should.equal(-2);
     done();
    });
 });

 //negative TC- operand is not a number
 it('Not a number', function(done){
   request(url).get('add/p/5')
   .expect(200)
   .end(function(err, res){
     if(err) {
      throw err;
     }
     res.body.should.equal("Operand not a number");
     done();
    });
 });

 // Not Found request; error code 404 
 it('Not Found', function(done){
   //request(url).get('blahblah/2/4')
   //request(url).get('add/')
   request(url).get('add/4')
   .expect(404, done)
 });

 // Bad request; error code 400
 it('Bad request', function(done){
   request(url).get('add/$/%')
   .expect(400)
   .end(function(err, res){
     if(err) {
      throw err;
     }
     done();
    });
 });

 // DIVISION TESTCASES
 //TC: divide positive numbers
 it('divide numbers', function(done){
   request(url).get('divide/12/4')
   .expect(200)
   .end(function(err, res){
     if(err) {
      throw err;
     }
     res.body.should.equal(3);
     done();
    });
 });

 //TC: divide positive and negative numbers
 it('divide numbers', function(done){
   request(url).get('divide/12/-4')
   .expect(200)
   .end(function(err, res){
     if(err) {
      throw err;
     }
     res.body.should.equal(-3);
     done();
    });
 });

 //negative TC- operand is not a number
 it('Not a number division', function(done){
   request(url).get('divide/p/5')
   .expect(200)
   .end(function(err, res){
     if(err) {
      throw err;
     }
     res.body.should.equal("Operand not a number");
     done();
    });
 });

 // Not Found request; error code 404 
 it('Not Found in division', function(done){
   //request(url).get('blahblah/2/4')
   //request(url).get('divide/pl/#')
   request(url).get('divide/')
   .expect(404, done)
 });

 // Bad request; error code 400
 it('Bad request division', function(done){
   request(url).get('divide/$/%')
   .expect(400)
   .end(function(err, res){
     if(err) {
      throw err;
     }
     done();
    });
 });

 // SUBTRACTION TESTCASES
 //TC: subtract positive numbers
 it('subtract numbers', function(done){
   request(url).get('subtract/12/4')
   .expect(200)
   .end(function(err, res){
     if(err) {
      throw err;
     }
     res.body.should.equal(8);
     done();
    });
 });

 //TC: subtract positive and negative numbers
 it('subtract numbers', function(done){
   request(url).get('subtract/12/-4')
   .expect(200)
   .end(function(err, res){
     if(err) {
      throw err;
     }
     res.body.should.equal(16);
     done();
    });
 });

 //TC: subtract negative numbers
 it('subtract numbers', function(done){
   request(url).get('subtract/-12/-4')
   .expect(200)
   .end(function(err, res){
     if(err) {
      throw err;
     }
     res.body.should.equal(-8);
     done();
    });
 });

 //negative TC- operand is not a number
 it('Not a number subtraction', function(done){
   request(url).get('subtract/p/5')
   .expect(200)
   .end(function(err, res){
     if(err) {
      throw err;
     }
     res.body.should.equal("Operand not a number");
     done();
    });
 });

 // Not Found request; error code 404 
 it('Not Found in subtraction', function(done){
   //request(url).get('blahblah/2/4')
   //request(url).get('subtract/pl/#')
   request(url).get('subtract/')
   .expect(404, done)
 });

 // Bad request; error code 400
 it('Bad request in subtraction', function(done){
   request(url).get('subtract/$/%')
   .expect(400)
   .end(function(err, res){
     if(err) {
      throw err;
     }
     done();
    });
 });

 // MULTIPLICATION TESTCASES
 //multiply positive numbers
 it('multiply numbers', function(done){
   request(url).get('multiply/2/4')
   .expect(200)
   .end(function(err, res){
     if(err) {
      throw err;
     }
     res.body.should.equal(8);
     done();
    });
 });

 //multiply positive and negative numbers
 it('multiply numbers', function(done){
   request(url).get('multiply/-2/4')
   .expect(200)
   .end(function(err, res){
     if(err) {
      throw err;
     }
     res.body.should.equal(-8);
     done();
    });
 });

 //multiply negative numbers
 it('multiply numbers', function(done){
   request(url).get('multiply/-2/-4')
   .expect(200)
   .end(function(err, res){
     if(err) {
      throw err;
     }
     res.body.should.equal(8);
     done();
    });
 });

 //negative TC- operand is not a number
 it('Not a number in multiplication', function(done){
   request(url).get('multiply/p/5')
   .expect(200)
   .end(function(err, res){
     if(err) {
      throw err;
     }
     res.body.should.equal("Operand not a number");
     done();
    });
 });

 // Not Found request; error code 404 
 it('Not Found in multiplication', function(done){
   //request(url).get('blahblah/2/4')
   //request(url).get('add/pl/#')
   request(url).get('multiply/')
   .expect(404, done)
 });

 // Bad request; error code 400
 it('Bad request in multiplication', function(done){
   request(url).get('add/$/%')
   .expect(400)
   .end(function(err, res){
     if(err) {
      throw err;
     }
     done();
    });
 });


});
 
