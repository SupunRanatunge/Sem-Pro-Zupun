/**
 * Created by supun on 7/14/2017.
 */
const {mongoose} = require('./../db/mongoose');
const {Location} = require('./../model/mapModel.js');
var viewMap =(location)=>{
    console.log('inside controller');

    return Location.findOne(location);

};

module.exports = {viewMap};

