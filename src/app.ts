import express from 'express'
import http from 'http'
import socketio from 'socket.io'


const app = express()
const server = http.createServer(app)
// @ts-ignore
const socket = socketio(server)


const messages = [
    {message: "Hello Vika", id: "1233123", user: {id: "aweqeqweqwe", name: "Andrii"}},
    {message: "Hello Andrii", id: "1231524", user: {id: "aweqeqweqwe", name: "Vika"}},
]


app.get('/', (req, res) => {
    res.send("Hay, it's WS server");
});

socket.on('connection', (socketChannel) => {

    socketChannel.on('client-message-sent', (message: string) => {
        console.log(message);
    });
    socketChannel.emit('init-messages-published', messages)

    console.log('a user connected');
});


const PORT = process.env.PORT || 3009

server.listen(PORT, () => {
    console.log('listening on *:3009');
});