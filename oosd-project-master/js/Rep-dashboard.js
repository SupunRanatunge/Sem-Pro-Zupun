/**
 * Created by supun on 7/11/2017.
 */
var socket = io();

socket.on('connect', function() {
    console.log('connected to server');
});
socket.on('disconnect', function() {
    console.log('server is disconnected');
});


