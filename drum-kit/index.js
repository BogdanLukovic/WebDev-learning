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
        this.style.color = "white";
    });
}
