let timer = document.querySelector('.timer').textContent;
let countdown = setInterval(() => {
  timer--;
  document.querySelector('.timer').textContent = timer;
  if (timer <= 0) clearInterval(countdown);
}, 1000);
