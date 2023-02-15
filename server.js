const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = 8000;

app.use(express.static('public'));

io.on('connection', (socket) => {
  console.log('a user connected');

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });

  socket.on('message', ({message,nombre}) => {
    io.emit('user message', {
        message,
        nombre
    });
  });
});

http.listen(port, () => {
  console.log('listening on *:' + port);
});
