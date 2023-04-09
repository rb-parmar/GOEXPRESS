'use strict';

// Declaring HTML elements
const figure = document.querySelector('figure');
const mapbox = document.getElementById('#mapbox');
const icon = document.querySelector('.icon');


//  Changing slides of food
let slides = ['food1.jpg', 'food2.jpg', 'food3.jpg'];

let start = 0;
function slider() {
    start < slides.length ? start = start + 1  :  start = 1; 
    figure.innerHTML = "<img src=" + "./assests/image/" + slides[start-1] + ">";
}
setInterval(slider,2000)


// Mapbox
mapboxgl.accessToken = 'pk.eyJ1IjoicnVzaGl0cCIsImEiOiJjbGc5b2Y2eGcwbGpvM25vd2ZtcDdyZWppIn0.wRDJGN15s7fph_CLElJiRg';

function makeMap(longitude, latitude) {
    var map = new mapboxgl.Map({
        container: 'mapbox',
        style: 'mapbox://styles/mapbox/streets-v12',
        center: [longitude, latitude],
        zoom: 17,
        pitch: 15
    });

    new mapboxgl.Marker()
        .setLngLat([longitude, latitude])
        .addTo(map);
}


icon.addEventListener('click', () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            function getLocation(position) {
                const longitude = position.coords.longitude;
                const latitude = position.coords.latitude;
                makeMap(longitude, latitude); 
            });
    } else {
        alert('Geolocation is not supported by your browser');
    }
})

