/**
 * Created by supun on 7/12/2017.
 */
const {mongoose} = require('./../db/mongoose');
const {Contact} = require('./../model/addContactmodel');

var addcontact = (contact)=> {
    return new Contact(contact).save();

};


var display = (contact) => {
    console.log('controller rox');
    return Contact.findOne(contact);
};

module.exports ={
    addcontact,
    display
}