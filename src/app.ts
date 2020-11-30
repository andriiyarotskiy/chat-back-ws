import express from 'express';
import http from 'http';
import socketio from 'socket.io-client';


const app = express()
const server = http.createServer(app);
const io = socketio(server)

// var io = require('socket.io')(http);



app.get('/', (req, res) => {
    res.send("Hay, it's WS server");
});

io.on('connection', (socket) => {
    console.log('a user connected');
});

server.listen(3009, () => {
    console.log('listening on *:3009');
});