
function initMap() {

  var mohali = {lat: 30.7046, lng: 76.7179};
  var tpss = {lat: 30.7116, lng: 76.6890};

  /****** Declare the Map *********/  
  var map = new google.maps.Map(document.getElementById('map'), {
    center: mohali,
    zoom: 14
  });

  /****** Add Number of Markers *********/
  var markerOne = new google.maps.Marker({
    map: map,
    position: mohali,
    title: 'Hello World!'
  });

  var markerTwo = new google.maps.Marker({
    map: map,
    position: tpss,
    title: 'Hello TPSS!'
  });

  /************ Add Info Window **************/
  var contentString = '<div id="content">' + '<h1>Hello TPSS!</h1>' + '</div>';

  var infowindow = new google.maps.InfoWindow({
    content: contentString
  });

  markerTwo.addListener('click', function() {
    infowindow.open(map, markerTwo);
  });  

  /************ Add Circle **************/

  var citymap = {
    tpss: {
      center: {lat: 30.7116, lng: 76.6890},
      population: 10
    },
    mohali: {
      center: {lat: 30.7046, lng: 76.7179},
      population: 100      
    }
  };

  for (var city in citymap) {
    
    var cityCircle = new google.maps.Circle({
      strokeColor: '#FF0000',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#FF0000',
      fillOpacity: 0.35,
      map: map,
      center: citymap[city].center,
      radius: Math.sqrt(citymap[city].population) * 100
    });

  }      

}