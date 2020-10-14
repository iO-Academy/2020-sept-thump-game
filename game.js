/**
 * Provides random number between min and max provided
 *
 * @param min
 *          Minimum number required
 * @param max
 *          Maximum number required
 * @returns {*}
 *          Random number
 */
function randTime(min, max) {
    return Math.random() * (max - min) + min;
}

// Available classes for trump position
var positions = ['animateTop', 'animateLeft', 'animateRight'];

// Available classes for trumps
var trumps = ['.trump01','.trump02','.trump03','.trump04','.trump05','.trump06']

/**
 * Provides single random element from supplied array
 *
 * @param array
 *             Source array
 *
 * @returns {*}
 *             Random element
 */
function getRandom(array) {
    var length = array.length;
    var idx = Math.floor(Math.random() * length);
    return array[idx];
}


let gameActive = setInterval(() => {
    let randomTrump = document.querySelector(getRandom(trumps))
    let randPosition = getRandom(positions);
    randomTrump.classList.add('animate', randPosition);
    setTimeout(() => {
            randomTrump.classList.remove('animate', randPosition);
        },1500)
}, randTime(2000, 4000));


let trumpsDiv = document.querySelectorAll('.trump');
let score = 0;

//Wrap in if statement to check if trump is popped up first
trumpsDiv.forEach(trump => trump.addEventListener('click', () => {
    if (trump.classList.contains('animate')) {
        trump.classList.remove('animate');
        score += 1;
        document.querySelector('.score').textContent = score;
    }
}))

const modalContainer = document.querySelector(".modalContainer")
const modal = document.querySelector(".modal")
const gameOverTitle = document.querySelector(".gameOverTitle h1")
const gameOverMess = document.querySelector(".gameOverMess h3")
let gif = document.querySelector(".gif img")
let title
let message

let timer = document.querySelector('.timer').textContent;
let countdown = setInterval(() => {
    timer--;
    document.querySelector('.timer').textContent = timer;
    if (timer <= 0) {
        clearInterval(countdown);
        clearInterval(gameActive);
        modalContainer.style.visibility = 'visible';
        switch (true) {
            case score === 0:
                title = "LOOOOSER"
                message = "ahahah I won BIGLY!!"
                gif.src = "https://media.giphy.com/media/Qjmp5vKEERPyw/source.gif"
                break
            case score === 1:
                title = "SO CLOOOOOSE"
                message = "You got me once looooser"
                gif.src = "https://media.giphy.com/media/wJNGA01o1Zxp6/source.gif"
                break
            case score < 10:
                title = "DAAAMN"
                message = `You thumped me ${score} times!`
                gif.src = "https://media.giphy.com/media/6L015gMEW3pFC/source.gif"
                break
            default :
                title = "FAKE NEWS!!!"
                message = `You didn't thump me ${score} times!`
                gif.src = "https://media.giphy.com/media/mpfMDb6MB6EWQ/giphy.gif"
        }
        gameOverTitle.textContent = title;
        gameOverMess.textContent = message;
    }
}, 1000);
