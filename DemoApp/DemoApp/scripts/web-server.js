var express = require('express');
var path = require('path');
var app = express();
var events = require('./eventsController');
var rootpath = path.normalize(__dirname + '/../');
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use(express.static(rootpath + '/app'));

app.get('/data/event/:id', events.get);
app.get('/data/event', events.getAll);
app.post('/data/event/:id', events.save);
app.listen(8000);
console.log('Listening on port 8000....')
