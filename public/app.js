var socket = io();
console.log(socket);

socket.on('connect', function(data) {
    socket.emit('join', 'Hello World from client');
 });
  socket.on('broad', function(data) {
         $('#future').append(data+ "<br/>");
   });
   $('form').submit(function(e){
       e.preventDefault();
       var message = $('#chat_input').val();
       socket.emit('message', message);
   });
