const mongoose = require('mongoose');

var Contact = mongoose.model('Contact',{
    name: {
        type:String,
        required: true
    },
    contact: {
        type: Number,
        minlength: 10

    },
    email: {
        type: String
    }
});

module.exports = {Contact};