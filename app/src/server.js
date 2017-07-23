var express = require('express');
var app = express();
var path = require('path');


app.all('/', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
 });

//your routes here
app.get('/', function (req, res) {
    res.send("Hello World! how are you");
});


app.get('/facebook', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'Facebook.htm'));
});


app.get('/fb', function (req, res) {
  res.sendFile(path.join(__dirname, 'facebook-style-homepage', 'index.html'));
});


app.get('/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'facebook-style-homepage', 'style.css'));
});



app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});
