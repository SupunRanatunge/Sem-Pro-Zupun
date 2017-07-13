//import libraries


const express = require('express');
const socketIO = require('socket.io');

//local libraries
const http = require('http');



var app = express();
app.use(express.static(__dirname+ '/oosd-project-master'));
var server = http.createServer(app);
var io = socketIO(server);

const {RepAddContactSocket} = require('./socket/Rep-socket');



io.on('connection', function(socket)  {
    console.log('new user connected');

    new RepAddContactSocket(io, socket);

    socket.on('disconnect', function() {
        console.log('disconnected user');

    });
 });



server.listen(3000, function()  {
    console.log('Server is up on port 3000');
});