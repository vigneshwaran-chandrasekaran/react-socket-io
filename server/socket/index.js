const io = require('socket.io')(4000);

io.on('connect', socket => {

  // handle the event sent with socket.send()
  socket.on('message', (data) => {
    socket.broadcast.emit('message', data);
  });

});