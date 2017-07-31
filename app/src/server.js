var express = require('express');
var app = express();
var fetch = require('node-fetch');

var DEVELOPMENT = (process.env.NODE_ENV == 'production') ? false : true;

// Talking to the database
var headers = { 'Content-Type': 'application/json' };
var url;

var defaultPassword = "indi%a./!@3-0";

DEVELOPMENT = true;

// When developing locally, need to access data APIs
// as if admin
if (DEVELOPMENT) {
  // headers.Authorization = 'Bearer ' + "wlouar8e1ykdj0p0vdpjniwrueh53wjv";
  url = `http://auth.c100.hasura.me`;
} else {
  url = 'http://data.default';
}

// Make a request to the data API as the admin role for full access
// headers['X-Hasura-Role'] = 'admin';
// headers['X-Hasura-User-Id'] = 1;

var existinguser = function (req, res,mobile) {

  var loginUrl = url + '/login';

  var optionsLogin = {
    method: 'POST',
    headers,
    body: JSON.stringify({
      "mobile": mobile,
      "password": defaultPassword+mobile
    })
  };

  fetch(loginUrl, optionsLogin)
    .then(
    (response) => {
      response.text()
        .then(
        (data) => {

          if (response.status == 200) {
            var d = JSON.parse(data);
            res.send(d.auth_token);
            return true;
          }
          else if (response.status == 403) {

            res.send("" + 403);
          }
          else {
            res.send(response.status + "" + data);
          }
        },
        (e) => {
          res.status = 403;
          res.send('Error in fetching current schema: ' + err.toString());
        })
        .catch((e) => {
          e.stack();
          res.status = 403;
          res.send('Error in fetching current schema: ' + e.toString());
        });
    },
    (e) => {
      console.error(e);
      res.send('Error in fetching current schema: ' + e.toString());
    })
    .catch((e) => {
      e.stackTrace();
      res.send('Error in fetching current schema: ' + e.toString());
    });
};

var signup = function (req, res,mobile) {
  var signupUrl = url + "/signup";
  var options = {
    method: 'POST',
    headers,
    body: JSON.stringify({
      "mobile": mobile,
      "password": defaultPassword+mobile,
      "username":mobile+"@chitchat"
    })
  };

  fetch(signupUrl, options)
    .then(
    (response) => {
      response.text()
        .then(
        (data) => {

          res.status=response.status;

          if (response.status == 200) {
            var d = JSON.parse(data);
            res.send(d.auth_token);
            return true;
          }
          else if (response.status == 409) {
              existinguser(req,res,mobile);
          }
          else {

            res.status=response.status;
            
            res.send(response.status + "" + data);
          }
        },
        (e) => {
          res.status = 403;
          res.send('Error in fetching current schema: ' + err.toString());
        })
        .catch((e) => {
          e.stack();
          res.status = 403;
          res.send('Error in fetching current schema: ' + e.toString());
        });
    },
    (e) => {
      console.error(e);
      res.status = 403;
      res.send('Error in fetching current schema: ' + e.toString());
    })
    .catch((e) => {
      e.stackTrace();
      res.status = 403;
      res.send('Error in fetching current schema: ' + e.toString());
    });
  return 525;
};

var fbaccountKit=function(req,res,accessToken){

var graphUrl="https://graph.accountkit.com/v1.2/me/?access_token="+accessToken;
fetch(graphUrl)
    .then(
    (response) => {
      response.text()
        .then(
        (data) => {
          res.status=response.status;
          if (response.status == 200) {
            var d = JSON.parse(data);
            
            signup(req,res,d.phone.national_number);

            return true;
          }
          else {
            res.status=response.status;
            res.send(response.status + "" + data);
          }
        },
        (e) => {
          res.status = 403;
          res.send('Error in fetching current schema: ' + err.toString());
        })
        .catch((e) => {
          e.stack();
          res.status = 403;
          res.send('Error in fetching current schema: ' + e.toString());
        });
    },
    (e) => {
      console.error(e);
      res.status = 403;
      res.send('Error in fetching current schema: ' + e.toString());
    })
    .catch((e) => {
      e.stackTrace();
      res.status = 403;
      res.send('Error in fetching current schema: ' + e.toString());
    });
 
 

}

app.get('/fbac', function (req, res) {
//signup(req,res,req.query.mobile);

fbaccountKit(req,res,req.query.access_token);

});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});