
let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomNumber2 = Math.floor(Math.random() * 6) + 1;

let randomImage1 = "images/dice" + randomNumber1 + ".png"
let randomImage2 = "images/dice" + randomNumber2 + ".png"


document.querySelector(".img1").setAttribute("src", randomImage1)
document.querySelector(".img2").setAttribute("src", randomImage2)

if (randomNumber1 > randomNumber2) {
    document.querySelector(".container h1").innerHTML = "Player 1 WINS ⭐️👌🏼"
} else if (randomNumber1 < randomNumber2) {
    document.querySelector(".container h1").innerHTML = "Player 2 WINS ☠️ 💂‍♀️"
} else {
    document.querySelector(".container h1").innerHTML = "DRAW"
}