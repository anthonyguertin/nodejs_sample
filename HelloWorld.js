
const express = require('express');
const http = require('http');
const path = require('path');
const bodyParser = require('body-parser');

const hostname = '127.0.0.1';
const port = 3000;

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
// routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/form.html'));
});

app.listen(port, hostname, null, (req, res) => {
  console.log(`server is running at http://${hostname}:${port}/`)
});

app.post('/', function(req, res) {
/*
var user =
  {
    'username': req.body.user.username,
    'email': req.body.user.email
  };
*/

  //res.json(user);
  var options = {
    headers: {
        'x-timestamp': Date.now(),
        'x-sent': true,
        'name': req.body.user.username,
        'email': req.body.user.email,
        'origin': 'localhost'
    }
  };
  res.sendFile(path.join(__dirname + `/post_response.html`), options);
});
/* from app.post
  var options = {
    headers: {
        'x-timestamp': Date.now(),
        'x-sent': true,
        'name': req.body.user.username,
        'email': req.body.user.email,
        'origin': 'localhost'
    }
  };
  res.sendFile(path.join(__dirname + `/post_response.html`), options);
*/
/*
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
*/
