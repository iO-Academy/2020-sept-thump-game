// function randTime(min, max) {
//     return Math.round(Math.random() * (max - min) + min);
// }

// function visibleTrump() {
//     trumps.forEach((trump) => {
//         trump.hidden = true;
//     })
// }
//
// visibleTrump();


var trumps = document.querySelectorAll('.trump');
var building = document.querySelectorAll('.building');


function randTime(min, max) {
    return Math.random() * (max - min) + min;
}

function getPosition() {
    var positions = ['.animateTop', '.animateLeft', '.animateRight'];
    var length = positions.length;
    return Math.floor(Math.random() * length);
}


function randTrump() {
    var time = randTime(1000, 2000);
    trumps.forEach((trump) => {
         trump.classList.add('animate');
     })

}