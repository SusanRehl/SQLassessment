var express=require('express');
var app=express();
var path=require('path');
var bodyParser=require('body-parser');
var urlencodedParser=bodyParser.urlencoded( {extended: false} );
var pg=require('pg');
var connectionString='postgres://localhost:5432/assessment2';
var random=require('../modules/random.js');  // sets up random number module


app.get('/', function(req, res) {
  console.log('hello from base url get');
  res.sendFile(path.resolve('views/index.html'));
});

app.get('/getList', function(req, res) { // displaying the list - uses GET
  console.log("in app.get get list animals");
  var results = [];
  pg.connect(connectionString, function(err, client, done) {
    var animalList=client.query('SELECT animal, animal_num FROM animals;');
    console.log('query '+ animalList);
    var rows = 0;
    animalList.on('row', function(row) {
      results.push(row);
    });  // end query push
    animalList.on('end', function() {
      return res.json(results);
    });
  });
  });

app.post('/addAnimal',urlencodedParser, function(req, res) {
  console.log('in POST add animal ' + req.body.animal + req.body.animal_num);
  // var results = [];
  pg.connect(connectionString, function(err, client, done) {
    client.query('INSERT INTO animals(animal, animal_num) VALUES($1, $2)', [req.body.animal, req.body.animal_num]);
    }); // end database connection
    var fromModule=results(req.body);
    res.send(fromModule);
    res.end();
  }); // end add product post function

app.listen(3000, 'localhost', function(req, res) {
  console.log("listening on port 3000");
});


app.use(express.static('public'));
