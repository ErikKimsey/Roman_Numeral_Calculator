var express = require('express');
var app = express();
var path = require('path');
var server = require('http').createServer(app);
var io = require('socket.io')(server);

app.use(express.static(path.join(__dirname, 'public')));






io.on('connection', function(client){
  console.log("Client connected");

  client.on('join', function(data){
    console.log(data);
  })

  client.on('message', function(data){
    client.emit('broad', data);
  });
})

server.listen(4200, function(){
  console.log("listening");
});
