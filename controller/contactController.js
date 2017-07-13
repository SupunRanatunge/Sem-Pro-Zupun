/**
 * Created by supun on 7/12/2017.
 */
const {mongoose} = require('./../db/mongoose');
const {NewContact} = require('./../model/addContactmodel');

var addcontact = (contact)=> {
    return new NewContact(contact).save();

};
module.exports = {addcontact};