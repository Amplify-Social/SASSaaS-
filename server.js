var express = require('express');
var sass = require('node-sass');
var app = express();
var bodyParser = require('body-parser')

app.use(bodyParser());

app.get('/', function(req, res){
  res.send('hello world');
});

app.post('/compile', function(req, res) {
  var data = "";
  for (k in req.body) data = k;

  var css = sass.renderSync({
    data: data,
    stats: {},
    outputStyle: 'compressed'
  });

  res.send(css);
})

app.listen(3000);
