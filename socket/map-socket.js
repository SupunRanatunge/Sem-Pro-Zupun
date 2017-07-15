/**
 * Created by supun on 7/14/2017.
 */
const mapController = require('./../controller/mapController.js');

class mapSocket{
    constructor(io,socket){
        socket.on('mapLocation',(location, callback)=> {
            mapController.viewMap(location).then((res)=>{
                console.log('socket');
                console.log(location);

                console.log('socket',res);
                console.log(res.longtd);

                callback(undefined, res);

            }, (err) => {
                callback(err);
            });

        });
    };
};
module.exports = {mapSocket};