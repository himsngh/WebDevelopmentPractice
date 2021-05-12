
let colors = ["red", "green", "yellow", "blue"]
let sequence = []

let roundNum = 0;
let lost = false
let seqNum = 0;

function nextSequence() {
    let randomNum = Math.floor((Math.random() * 4))
    sequence.push(colors[randomNum])

    $("#" + colors[randomNum]).fadeOut(200).fadeIn(200).fadeOut(100).fadeIn(100);
    new Audio("./sounds/" + colors[randomNum] + ".mp3").play();

    console.log(sequence)
}

$(document).on("keydown", function () {
    nextRound()
})

$(".btn").on("click", function () {

    $("#" + this.id).fadeOut(100).fadeIn(100);

    let userChoseColor = this.id
    if (lost || userChoseColor != sequence[seqNum]) {
        $("#level-title").text("Game Over, Press Any Key to Restart")
        new Audio("./sounds/wrong.mp3").play()
        
        // resetting the game
        lost = true
        sequence = []
        return
    }

    seqNum++;
    if (seqNum === sequence.length) {
        nextRound()
    }
})

function nextRound() {
    roundNum++;
    $("#level-title").text("Round : " + roundNum)
    nextSequence();
    seqNum = 0;
    lost = false;
}