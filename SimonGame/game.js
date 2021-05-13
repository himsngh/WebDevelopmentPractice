
let colors = ["red", "green", "yellow", "blue"]
let sequence = []

let roundNum = 0;
let lost = false
let startGame = true
let seqNum = 0;

// To start or restart the game 
$(document).on("keydown", function () {
    if (startGame || lost) {
        startGame = false;
        roundNum = 0;
        lost = false;
        sequence = []
        nextRound();
    }
})

$(".btn").on("click", function () {

    let userChoseColor = this.id
    animatePressed(userChoseColor)
    playSound(userChoseColor)

    checkAnswer(userChoseColor)
})

function checkAnswer(userChoseColor) {
    if (lost || userChoseColor != sequence[seqNum]) {
        gameOver()
        playSound("wrong")
        return
    }

    seqNum++;
    if (seqNum === sequence.length) {
        setTimeout(function() {
            nextRound()
        },500)
    }
}

function nextSequence() {
    let randomNum = Math.floor((Math.random() * 4))
    sequence.push(colors[randomNum])

    $("#" + colors[randomNum]).fadeOut(200).fadeIn(200).fadeOut(100).fadeIn(100);
    playSound(colors[randomNum])

    console.log(sequence)
}

function nextRound() {
    roundNum++;
    $("#level-title").text("Round : " + roundNum);
    nextSequence();
    seqNum = 0;
    lost = false;
}

function gameOver() {
    $("#level-title").text("Game Over, Press Any Key to Restart")
    lost = true

    $("body").addClass("game-over")
    setTimeout(function() {
        $("body").removeClass("game-over");
    },200)
}

function playSound(name) {
    new Audio("./sounds/" + name + ".mp3").play();
}

function animatePressed(name) {

    $("#" + name).addClass("pressed");
    setTimeout(function() {
        $("#" + name).removeClass("pressed");
    },100)

}