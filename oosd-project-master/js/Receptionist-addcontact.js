
var socket = io();

function addcontact() {
    var name = $('#name').val();
    var cnt = $('#ct-number').val();
    var email = $('#email').val();

    console.log(name);
    console.log(cnt);
    console.log(email);


    socket.emit('newContact', {
        name: name,
        contact: cnt,
        email: email
    });

};