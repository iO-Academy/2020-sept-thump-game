var modalContainer = document.querySelector(".modalContainer")
var modal = document.querySelector(".modal")
var gameOverTitle = document.querySelector(".gameOverTitle h1")
console.log(gameOverTitle)
var gameOverMess = document.querySelector(".gameOverMess h3")
var gif = document.querySelector(".gif img")


let score = 0
let title
let message
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
