var express = require('express');
var app = express();
var path = require('path');
const https = require('https');
var http = require('http');
var Promise = require('promise');
var request = require('request');


var request = require('request');


var DEVELOPMENT = (process.env.NODE_ENV == 'production') ? false : true;

// Talking to the database
var headers = { 'Content-Type': 'application/json' };
var url;

if (DEVELOPMENT) {
  headers.Authorization = 'Bearer ' + process.env.ADMIN_TOKEN;
  url = `http://data.${process.env.PROJECT_NAME}.hasura.me`;
} else {
  url = 'http://data.default';
}

headers['X-Hasura-Role'] = 'admin';
headers['X-Hasura-User-Id'] = 1;

app.get('/', function (req, res) {
  var schemaFetchUrl = url + '/v1/query';
  var options = {
    url: schemaFetchUrl,
    method: 'POST',
    headers,
    body: JSON.stringify({
      type: 'select',
      args: {
        schema: 'hdb_catalog',
        table: 'hdb_table',
        columns: ['*.*'],
        where: { table_schema: 'public' }
      }
    })
  };

  var callback = function (err, res, body) {
    if (err) {

      console.log(err);
      // reject('Error making request - ' +err);
    } else if (res.statusCode !== 200) {

      console.log(res);
      //  reject('Invalid API response - ' +body);
    } else {
      console.log(mobile + "\n" + body);
      //  fulfill(body);
    }
  };
  
  request(options, callback);
});



// Begin Execution:


function main(mobile, response) {
  register(mobile)                //Executes 1st
    // .then(updateData)       //Whatever is 'fulfilled' in the previous method, gets passed to this function updateData
    //  .then(sendNotification) //Whatever is fulfilled in the previoud method, gets passed to this function sendNotification.
    .catch(function (err) {

      response.send(err);

      console.log('If reject is called, this will catch it - ' + err);

      return err;

    });

  response.send("kaju badam");

  return "err";
}

// Request #1:
function register(mobile) {

  console.log("register called");

  return new Promise(function (fulfill, reject) {

    var options = {
      url: 'http://auth.c100.hasura.me/signup',
      json: true,
      body: { "dg": "dg" },
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'X-Hasura-Role': 'annonymous',

      }
    };

    var callback = function (err, res, body) {
      if (err) {
        reject('Error making request - ' + err);
      } else if (res.statusCode !== 200) {
        reject('Invalid API response - ' + body);
      } else {
        console.log(mobile + "\n" + body);
        fulfill(body);
      }
    };

    request(options, callback);
  });
}

// Request #2:
function updateData(data) {
  return new Promise(function (fulfill, reject) {
    request({}, function (err, res, body) {
      if (err) {
        reject('Error making request updateData- ' + err);
      } else if (res.statusCode !== 200) {
        reject('Invalid API response - ' + body);
      } else {
        fulfill(body);
      }
    });
  });
}


// Request #3
function sendNotification(phoneNumber, email) {
  return new Promise(function (fulfill, reject) {
    request({}, function (err, res, body) {
      if (err) {
        reject('Error making request sendNotificatiom - ' + err);
      } else if (res.statusCode !== 200) {
        reject('Invalid API response - ' + body);
      } else {
        fulfill(body);
      }
    });
  });
}


app.all('/', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});


app.get('/login', function (request, response) {

  var defaultpass = "iloveIndia455464#.";
  var token = request.query.token;
  token = "EMAWfacE5GY1i8kLm3vEZBNzR7YurywZCCkt6ZAxG8wcg2eyjuUR95NhBdvx1ajXou6MpXRCxJMVGr5XunFdNvbRZBUv03ITg6Vbr6UZCN9XgZDZD";
  var url = "https://graph.accountkit.com/v1.2/me/?access_token=" + token;

  //request to facebok
  const req = https.request(url, (res) => {

    //request successfull
    res.on('data', (d) => {
      //process.stdout.write(d+"\n");
      var data = JSON.parse(d);
      //process.stdout.write(data.phone.national_number);
      main(data.phone.national_number, response);
      ;
    });
  });

  req.on('error', (e) => {
    console.error(e);
  });
  req.end();
});

app.get('/register', function (req, res) {
  res.sendFile(path.join(__dirname, 'code', 'registration.html'));
});


// app.get('/facebook', function (req, res) {
//   res.sendFile(path.join(__dirname, 'ui', 'Facebook.htm'));
// });


app.get('/fb', function (req, res) {
  res.sendFile(path.join(__dirname, 'facebook-style-homepage', 'index.html'));
});


app.get('/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'facebook-style-homepage', 'style.css'));
});


app.get('/facebook.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'facebook-style-homepage', 'facebook.png'));
});


app.get('/world.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'facebook-style-homepage', 'world.png'));
});


app.get('/grid.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'facebook-style-homepage', 'grid.png'));
});


app.get('/facebook', function (req, res) {
  res.sendFile(path.join(__dirname, 'facebook-style-homepage', 'fbo.html'));
});


app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});
