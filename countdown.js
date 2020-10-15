let timeLeft = 5
const inter = setInterval(() => {
    document.querySelector('.countdownTitle h1').textContent = timeLeft;
    timeLeft--
}, 1000);

setTimeout(() => {
    clearInterval(inter);
    document.querySelector('.countdownContainer').classList.add('endCountdown');
    countdown()
}, 6000);




