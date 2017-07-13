/**
 * Created by supun on 7/12/2017.
 */
var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp',function(e){
    if(e){
        console.log('error');
    };
    console.log('connect to database');
});

module.exports = {mongoose}