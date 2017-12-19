var express = require('express');
var app = express();
var path = require('path');
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var Calculator = require('./calculator.js');


app.use(express.static(path.join(__dirname, 'public')));



var calc = new Calculator(2, 2, "add");
console.log(calc);
// calc.calculate("add");


io.on('connection', function(client){
  console.log("Client connected");

  client.on('join', function(data){
    console.log("in serverside ",data);
  })

  client.on('message', function(data){
    console.log(data);
    client.emit('broad', data);
  });
})

server.listen(4200, function(){
  console.log("listening");
});
