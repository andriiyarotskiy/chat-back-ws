"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var http_1 = __importDefault(require("http"));
var socket_io_client_1 = __importDefault(require("socket.io-client"));
var app = express_1.default();
var server = http_1.default.createServer(app);
var io = socket_io_client_1.default(server);
// var io = require('socket.io')(http);
app.get('/', function (req, res) {
    res.send("Hay, it's WS server");
});
io.on('connection', function (socket) {
    console.log('a user connected');
});
server.listen(3009, function () {
    console.log('listening on *:3009');
});
//# sourceMappingURL=app.js.map