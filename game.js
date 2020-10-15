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

let visibleTime = function(score) {
    let time;
    if (score < 4) {
        time = 1500;
    } else if (score < 8) {
        time = 1000;
    } else {
        time = 750;
    }
    console.log(time);
    return time;
}


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
  let length = array.length;
  let idx = Math.floor(Math.random() * length);
  return array[idx];
}

// Available classes for trump position
const positions = [
    'animateTop',
    'animateLeft',
    'animateRight'
];

// Available classes for trumps
const trumps = [
    '.trump01',
    '.trump02',
    '.trump03',
    '.trump04',
    '.trump05',
    '.trump06'
];

/**
 * Generates a single random trump appearance
 */
let randTrump = () => {
    setTimeout(() => {
        let randomTrump = document.querySelector(getRandom(trumps))
        let randPosition = getRandom(positions);
        randomTrump.classList.add('animate', randPosition);
        setTimeout(() => {
            randomTrump.classList.remove('animate', randPosition);
        }, visibleTime(score))
    }, randTime(500, 2000))
}

randTrump();
let intervalId = setInterval(randTrump, 2000);

let trumpsDiv = document.querySelectorAll('.trump');
let score = 0;

// Animates on click and adds to score
trumpsDiv.forEach(trump =>
  trump.addEventListener('click', () => {
    if (trump.classList.contains('animate')) {
      trump.classList.remove('animate');
      score += 1;
      document.querySelector('.score').textContent = score;
    }
}))

const modalContainer = document.querySelector(".modalContainer");
const gameOverTitle = document.querySelector(".gameOverTitle h1");
const gameOverMess = document.querySelector(".gameOverMess h3");
let gif = document.querySelector(".gif img");
let title;
let message;

// Starts countdown and displays game over popup at end
let timer = document.querySelector('.timer').textContent;
let countdown = setInterval(() => {
    timer--;
    document.querySelector('.timer').textContent = timer;
    if (timer <= 0) {
        clearInterval(countdown);
        trumpsDiv.forEach(trump => {
            trump.hidden = true;
        })
        clearInterval(intervalId);
        modalContainer.style.visibility = 'visible';
        switch (true) {
            case score === 0:
                title = "LOOOOSER";
                message = "ahahah I won BIGLY!!";
                gif.src = "https://media.giphy.com/media/Qjmp5vKEERPyw/source.gif";
                break;
            case score === 1:
                title = "SO CLOOOOOSE";
                message = "You only got me once looooser";
                gif.src = "https://media.giphy.com/media/wJNGA01o1Zxp6/source.gif";
                break;
            case score < 10:
                title = "DAAAMN";
                message = `You thumped me ${score} times!`;
                gif.src = "https://media.giphy.com/media/6L015gMEW3pFC/source.gif";
                break;
            default :
                title = "FAKE NEWS!!!";
                message = `You definitely didn't thump me ${score} times!`;
                gif.src = "https://media.giphy.com/media/mpfMDb6MB6EWQ/giphy.gif";
        }
        gameOverTitle.textContent = title;
        gameOverMess.textContent = message;
    }
}, 1000);