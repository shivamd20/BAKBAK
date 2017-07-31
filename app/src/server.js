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
      "password": "123456"
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

            //do sign up and return the respons        fetch()

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

var signup = function (req, res,mobile) {
  var signupUrl = url + "/signup";
  var options = {
    method: 'POST',
    headers,
    body: JSON.stringify({
      "mobile": mobile,
      "password": "123456",
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

            //do sign up and return the respons        fetch()

              existinguser(req,res,mobile);

            // fetch(signupUrl,Option).then((responseSinup)=>{
            //   responseSinup.text().then((datasinup)=>{

            //      if(response.status==200)
            // {
            //   var d=JSON.parse(data);
            //   res.send("data"+d);
            // }else
            // {
            //   res.status=403;
            //   res.send("error");
            // }
            //   })
            // },(e)=>{
            //     res.send("error");
            // })
            // .catch((e)=>{
            //     res.send("error");
            // });

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

app.get('/', function (req, res) {
  //existinguser(req, res);

signup(req,res,req.query.mobile);

  //TODO VARIFY MOBILE NUMBER FOR LOGIN
});

/*
 * Sample endpoint to check the role of a user
 * When any user makes a request to this endpoint with
 * the path containing the roleName. Eg: /admin, /user, /anonymous
 * that path only gets served, if the user actually has that role.
 * To test, login to the console as an admin user. /admin, /user will work.
 * Make a request to /admin, /user from an incognito tab. They won't work, only /anonymous will work.
 */
app.get('/:role', function (req, res) {
  var roles = req.get('X-Hasura-Allowed-Roles');

  // Check if allowed roles contains the rolename mentioned in the URL
  if (roles.indexOf(req.params.role) > -1) {
    res.send('Hey, you have the <b>' + req.params.role + '</b> role');
  } else {
    res.status(403).send('DENIED: Only a user with the role <b>' + req.params.role + '</b> can access this endpoint');
  }
});

app.listen(8088, function () {
  console.log('Example app listening on port 8080!');
});