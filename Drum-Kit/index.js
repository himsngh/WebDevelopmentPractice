
document.querySelectorAll("button.drum").forEach(element => {
    element.addEventListener("click", function () {
        playSound(this.innerHTML)
        buttonAnimation(this.innerHTML)
    })
})

document.addEventListener("keydown", event => {
    playSound(event.key)
    buttonAnimation(event.key)
})
// for playing sound with the press of the particular key
function playSound(key) {
    switch (key) {
        case "w":
            new Audio("./sounds/crash.mp3").play();
            break;
        case "a":
            new Audio("./sounds/kick-bass.mp3").play();
            break;
        case "s":
            new Audio("./sounds/snare.mp3").play();
            break;
        case "d":
            new Audio("./sounds/tom-1.mp3").play();
            break;
        case "j":
            new Audio("./sounds/tom-2.mp3").play();
            break;
        case "k":
            new Audio("./sounds/tom-3.mp3").play();
            break;
        case "l":
            new Audio("./sounds/tom-4.mp3").play();
            break;

    }
}
// for adding animation to the buttons
function buttonAnimation(key) {
    document.querySelector("." + key).classList.add("pressed")
    setTimeout(function(){
        document.querySelector("." + key).classList.remove("pressed")
    }, 100)
}