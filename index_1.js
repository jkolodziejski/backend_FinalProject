import Express from "express";
const app = Express();
import http from "http";


import { fileURLToPath } from 'url';
import { dirname } from 'path';
const server = http.createServer(app);

import {Server} from "socket.io";
const io = new Server(server);




const filename = fileURLToPath(import.meta.url);
const dir = dirname(filename);

app.get('/', (req, res) => {
    res.sendFile(dir + '/index.html');
  });

  io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('chat message', (msg) => {
        console.log('message: ' + msg);
      });
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
  });

  io.on('connection', (socket) => {
    console.log('a user connected 1');
    socket.on('chat message 1', (msg) => {
        console.log('message 1: ' + msg);
      });
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
  });

  io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
      io.emit('chat message', msg);
    });
  });


server.listen(3001, () => {
  console.log('listening on *:3000');
});