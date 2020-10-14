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

/**
 * Adds and removes randomly selected classes to randomly selected trumps
 *
 */
function randTrump() {
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
  setInterval(() => {
    let randomTrump = document.querySelector(
      getRandom(trumps)
    );
    let randPosition = getRandom(positions);
    randomTrump.classList.add('animate', randPosition);
    setTimeout(() => {
      randomTrump.classList.remove('animate', randPosition);
    }, randTime(600, 1200));
    console.log(randomTrump);
  }, randTime(1000, 2000));
}

randTrump();

let trumpsDiv = document.querySelectorAll('.trump');
let score = 0;

//Wrap in if statement to check if trump is popped up first
trumpsDiv.forEach((trump) =>
  trump.addEventListener('click', () => {
    if (trump.classList.contains('animate')) {
      trump.classList.remove('animate');
      score += 1;
      document.querySelector('.score').textContent = score;
    }
  })
);
