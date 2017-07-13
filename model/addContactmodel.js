const mongoose = require('mongoose');

var NewContact = mongoose.model('NewContact',{
    name: {
        type:String,
        required: true
    },
    contact: {
        type: Number

    },
    email: {
        type: String
    }
});

module.exports = {NewContact};