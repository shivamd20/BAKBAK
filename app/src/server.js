var express = require('express');
var app = express();
var path = require('path');

//your routes here
app.get('/', function (req, res) {
    res.send("Hello World! how are you");
});


app.get('/facebook', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'Facebook.htm'));
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});
