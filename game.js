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
//var scores =


function randTime(min, max) {
    return Math.random() * (max - min) + min;
}

function getPosition() {
    var positions = ['animateTop', 'animateLeft', 'animateRight'];
    var length = positions.length;
    var idx = Math.floor(Math.random() * (length - 1));
    return positions[idx];
}
var randPosition = getPosition();

function randTrump(randPosition) {
    var time = randTime(1000, 2000);
    setInterval(() => {
        trumps.forEach((trump) => {
            trump.classList.add('animate', randPosition);
        })
    }, time);

}

randTrump(randPosition);