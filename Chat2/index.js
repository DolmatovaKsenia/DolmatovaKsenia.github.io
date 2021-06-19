const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('disconnect', () => {
      console.log('user disconnected');
    });
  });
  io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
      console.log('message: ' + msg);
    });
    socket.on('user name', (user_name) => {
      console.log('name: ' + user_name);
    });
  });
  io.emit('some event', { someProperty: 'some value', otherProperty: 'other value' });

  io.on('connection', (socket) => {
    socket.broadcast.emit('hi');
  });

 io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
      io.emit('chat message', msg);
    });

    socket.on('user name', (user_name) => {
      io.emit('user name', user_name);
  });
});

server.listen(3000, () => {
  console.log('listening on *:3000');
});