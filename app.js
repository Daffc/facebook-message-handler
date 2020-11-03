const http = require('http');
const express = require('express');

var app = express();

app.set('port', process.env.PORT || 8080)

app.get('/', function(request, response){
  console.log('[support dash] processing get request');
  response.send('Hello World !!!');
});

app.listen(process.env.PORT || 8080, function(){
  console.log('****** exp listening on port: ' + (process.env.PORT || 8080));
});



