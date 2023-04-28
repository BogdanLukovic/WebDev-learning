var audio = [
    new Audio("sounds/crash.mp3"),
    new Audio("sounds/kick-bass.mp3"),
    new Audio("sounds/snare.mp3"),
    new Audio("sounds/tom-1.mp3"),
    new Audio("sounds/tom-2.mp3"),
    new Audio("sounds/tom-3.mp3"),
    new Audio("sounds/tom-4.mp3"),
];

let all_buttons = document.querySelectorAll(".drum");

for (let i = 0; i < all_buttons.length; i++) {
    all_buttons[i].addEventListener("click", function () {
        // audio[i].play();
        var buttonInnerHTML = this.innerHTML;

        makeSound(buttonInnerHTML);

        buttonAnimation(buttonInnerHTML);
    });
}

document.addEventListener("keypress", function (event) {
    makeSound(event.key);

    buttonAnimation(event.key);
});

function makeSound(key) {
    switch (key) {
        case "w":
            audio[0].play();
            break;
        case "a":
            audio[1].play();
            break;
        case "s":
            audio[2].play();
            break;
        case "d":
            audio[3].play();
            break;
        case "j":
            audio[4].play();
            break;
        case "k":
            audio[5].play();
            break;
        case "l":
            audio[6].play();
            break;

        default:
            console.log("The key " + key + " was pressed.");
            break;
    }
}

function buttonAnimation(pressedKey) {
    var active_button = document.querySelector("." + pressedKey);
    active_button.classList.add("pressed");

    setTimeout(function () {
        active_button.classList.remove("pressed");
    }, 100);
}
