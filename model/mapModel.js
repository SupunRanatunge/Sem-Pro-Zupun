/**
 * Created by supun on 7/14/2017.
 */
const mongoose = require('mongoose');

var Location = mongoose.model('Location',{
        location:{
            type: String
        },
        longtd:{
            type: Number
        },
        latitd:{
            type: Number

        }
});
module.exports= {Location}