let trumps = document.querySelectorAll('.trump');
let score = 0;

//Wrap in if statement to check if trump is popped up first
trumps.forEach(trump => trump.addEventListener('click', () => {
    if (trump.classList.contains('animate')) {
        trump.classList.remove('animate');
        score += 1;
        document.querySelector('.score').textContent = score;
    }
}))