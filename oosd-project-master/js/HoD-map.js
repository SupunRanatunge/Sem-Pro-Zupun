
var socket = io();

//const {marker}= require()

//const marker=require('./../HoD-map.html');

function positionSet(res){
    console.log("fefew");
    var position={
        lat: res.latitd,
        lng: res.longtd
    }
}


$('#map-search').on('submit',(e)=> {

    e.preventDefault();


    var location = $('#searchInput').val();
    console.log('what I typed:', location);

    socket.emit('mapLocation', {
        location: location
    }, function (err, res) {
        if (err) {
            console.log(err);
        }else{
            console.log('res:', res);

              var  lat= res.latitd;
              var   lng =res.longtd;
            var marker = new google.maps.Marker({

                position: {lat: lat, lng: lng}
            });
                //map: map
             console.log("latitude",lat);

            var marker = new google.maps.Marker({

                position: {lat:lat, lng:lng},
                

            });
        }

    });

});

function initMap() {
    console.log("inside ");

    var UoM = {lat: 6.7969, lng: 79.9018};

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 18,
        center: UoM
    });
    var marker = new google.maps.Marker({

        position: {lat:6.7969, lng:79.9018},
        map: map
    });
}


initMap();


/*
/*function markerPostition(x,y){
    var marker = new google.maps.Marker({

        position: {lat:x, lng:y},
        map: map
    });
}*/


