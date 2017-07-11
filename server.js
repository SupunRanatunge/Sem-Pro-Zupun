//import libraries
const express = require('express');
const socketIO = require('socket.io');

//local libraries
const http = require('http');
const path = require('path');

var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(__dirname+ '/oosd-project-master'));

io.on('connection', (socket) => {
    console.log('new user connected');

    socket.on('disconnect', function() {
        console.log('disconnected user');
    });


});


server.listen(3045, () => {
    console.log('Server is up on port 3045');
});