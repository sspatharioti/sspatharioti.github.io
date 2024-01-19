/**
 * This example uses pulsating circles CSS by Kevin Urrutia
 * http://kevinurrutia.tumblr.com/post/16411271583/creating-a-css3-pulsating-circle
 */

 //http://www.latlong.net/
 var markers = [
   //Europe
   {lat: 37.9833333, lng: 23.7333333, name: "Athens, Greece",lived: true },
   {lat: 48.856614, lng: 2.352222, name:"Paris, France" },
   {lat: 41.902783, lng: 12.496366, name: "Rome, Italy" },
   {lat: 45.070312, lng: 7.686856, name: "Turin, Italy" },
   {lat: 40.416775, lng: -3.703790, name:"Madrid, Spain"},
   {lat: 51.507351, lng: -0.127758, name: "London, UK" },
   {lat: 50.909700, lng: -1.404351, name: "Southampton, UK" },
   {lat: 43.925085, lng: 2.148641, name: "Albi, France" },
   {lat: 41.385063, lng: 2.173404, name: "Barcelona, Spain" },
   //USA
   {lat: 42.360082, lng: -71.058880, name: "Boston, USA", lived: true },
   {lat: 47.606209, lng: -122.332071, name:"Seattle, WA",lived: true },
   {lat: 40.712784, lng: -74.005941, name:"New York, NY",lived: true },

   {lat: 37.338208, lng: -121.886329, name: "San Jose, CA"},
   {lat: 37.774929, lng: -122.419418, name: "San Fransisco, CA"},
   {lat: 30.267153, lng: -97.743061, name: "Austin, TX"},
   {lat: 25.761680, lng: -80.191790, name: "Miami, FL"},
   {lat: 44.943888, lng: -93.099710, name:"St Paul, MN"},
   {lat: 41.499320, lng: -81.694361, name:"Cleveland, OH"},
   {lat: 34.052234, lng: -118.243685, name:"Los Angeles, CA"},
   {lat: 29.951066, lng: -90.071532, name:"New Orleans, LA"},
   {lat: 35.779591, lng: -78.638176, name:"Raleigh, NC"},
   {lat:41.878113, lng: -87.629799 , name:"Chicago, IL"},
   {lat:21.306944, lng: -157.858337, name:"Honolulu, HI"},
   {lat:44.052071, lng: -123.086754, name:"Eugene, OR"},
   {lat:33.448376, lng:-112.074036, name:"Phoenix, AZ"},

   //Rest:
   {lat: 9.392308, lng: -84.136988, name:" Costa Rica"},
   {lat: 20.967370, lng: -89.592586, name:"Mexico"},
   {lat: 25.034281, lng: -77.396278, name:"The Bahamas"}
 ]

 //dot svg
 var targetSVG = "M368.19 208.41C368.19 222.2 356.99 233.41 343.19 233.41C329.39 233.41 318.19 222.2 318.19 208.41C318.19 194.61 329.39 183.41 343.19 183.41C356.99 183.41 368.19 194.61 368.19 208.41Z"
// plane svg
 var planeSVG = "m2,106h28l24,30h72l-44,-133h35l80,132h98c21,0 21,34 0,34l-98,0 -80,134h-35l43,-133h-71l-24,30h-28l15,-47";


 markers_conv = []
 for (var i = 0; i < markers.length; i++) {

  var colr = "#f7f14c"
  var pSVG = targetSVG

   var mar = markers[i]

   if (mar.lived) {
    colr = "#94902d"
   }
   markers_conv.push({
     "latitude": mar.lat,
     "longitude": mar.lng,
     "title": mar.name,
     "zoomLevel": 5,
     "scale": 0.2,
     "svgPath": pSVG,
     "color":colr
   })
 }
 markers_conv.push({
      "svgPath": planeSVG,
      "positionOnLine": 0,
      "color": "#585869",
      "animateAlongLine": true,
      "lineId": "line1",
      "flipDirection": true,
      "loop": true,
      "scale": 0.03,
      "positionScale": 1.8
    } )

var map = AmCharts.makeChart( "chartdiv", {
  "type": "map",
  "theme": "light",
  "projection": "miller",

  "linesSettings": {
    "color": "#585869",
    "alpha": 0.4
  },

  "imagesSettings": {
    "rollOverColor": "#089282",
    "rollOverScale": 3,
    "selectedScale": 3,
    "selectedColor": "#089282",
    "color": "#13564e",
    "pauseDuration": 0.2,
    "animationDuration": 5,
    "adjustAnimationSpeed": true
  },

  "areasSettings": {
    "unlistedAreasColor": "#4790E3"
  },

  "dataProvider": {
    "map": "worldLow",
    "lines": [ {
      "id": "line1",
      "arc": -0.85,
      "alpha": 0.3,
      "latitudes": [ 37.9833333, 47.606209], //Athens - Seattle    
      "longitudes": [ 23.727539, -122.332071]
    }],
    "images": markers_conv
  }
} );
//
// // add events to recalculate map position when the map is moved or zoomed
// map.addListener( "positionChanged", updateCustomMarkers );
//
// // this function will take current images on the map and create HTML elements for them
// function updateCustomMarkers( event ) {
//   // get map object
//   var map = event.chart;
//
//   // go through all of the images
//   for ( var x in map.dataProvider.images ) {
//     // get MapImage object
//     var image = map.dataProvider.images[ x ];
//
//     // check if it has corresponding HTML element
//     if ( 'undefined' == typeof image.externalElement )
//       image.externalElement = createCustomMarker( image );
//
//     // reposition the element accoridng to coordinates
//     var xy = map.coordinatesToStageXY( image.longitude, image.latitude );
//     image.externalElement.style.top = xy.y + 'px';
//     image.externalElement.style.left = xy.x + 'px';
//   }
// }

// this function creates and returns a new marker element
function createCustomMarker( image ) {
  // create holder
  var holder = document.createElement( 'div' );
  holder.className = 'map-marker';
  holder.title = image.title;
  holder.style.position = 'absolute';

  // maybe add a link to it?
  if ( undefined != image.url ) {
    holder.onclick = function() {
      window.location.href = image.url;
    };
    holder.className += ' map-clickable';
  }

  // create dot
  var dot = document.createElement( 'div' );
  dot.className = 'dot';
  holder.appendChild( dot );

  // create pulse
  var pulse = document.createElement( 'div' );
  pulse.className = 'pulse';
  holder.appendChild( pulse );

  // append the marker to the map container
  image.chart.chartDiv.appendChild( holder );

  return holder;
}
