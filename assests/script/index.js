'use strict';

// Declaring HTML elements
const figure = document.querySelector('figure');












let slides=['food1.jpg', 'food2.jpg', 'food3.jpg'];

let start=0;
function slider() {
    start < slides.length ? start = start + 1  :  start = 1; 
    figure.innerHTML = "<img src=" + "./assests/image/" + slides[start-1] + ">";
}
setInterval(slider,2000)