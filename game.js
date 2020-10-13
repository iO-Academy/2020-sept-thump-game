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


// var trumps = document.querySelectorAll('.trump');
var building = document.querySelectorAll('.building');
//var scores =


function randTime(min, max) {
    return Math.random() * (max - min) + min;
}

    var positions = ['animateTop', 'animateLeft', 'animateRight'];
    var trumps = ['.trump01','.trump02','.trump03','.trump04','.trump05','.trump06']

function getRandom(array) {
    var length = array.length;
    var idx = Math.floor(Math.random() * length);
    return array[idx];
}

function randTrump() {
    setInterval(() => {
            var randomTrump = document.querySelector(getRandom(trumps))
            var randPosition = getRandom(positions);
            randomTrump.classList.add('animate', randPosition);
            setTimeout(() => {
                randomTrump.classList.remove('animate', randPosition);
                }
            ,1000)
            // console.log(trump.classList)
    }, randTime(1000, 2000));

}

randTrump();