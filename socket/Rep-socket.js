/**
 * Created by supun on 7/12/2017.
 */

const contactController = require('./../controller/contactController.js')

class RepAddContactSocket {
    constructor(io, socket) {
        socket.on('newContact', (contact, callback) => {
            contactController.addcontact(contact).then((res) => {
                console.log(res);
                callback(undefined, res);
            }, (err) => {
                callback(err);
            });

        });

    };
}
;

module.exports = {RepAddContactSocket};