var button_colors = ["green", "red", "yellow", "blue"];
var game_pattern = [];
var user_click_pattern = [];
var audio = [
    new Audio("sounds/green.mp3"),
    new Audio("sounds/red.mp3"),
    new Audio("sounds/yellow.mp3"),
    new Audio("sounds/blue.mp3"),
    new Audio("sounds/wrong.mp3"),
];

var playing = false;
var level = 0;

function nextSequence() {
    user_click_pattern = [];
    level += 1;
    $("h1").text("Level " + level);

    let random_number = Math.floor(Math.random() * 4);
    let random_color = button_colors[random_number];

    game_pattern.push(random_color);

    flashElement("#" + random_color);
    playSound(random_color);
}

function flashElement(element) {
    $(element).toggleClass("pressed");
    setTimeout(function () {
        $(element).toggleClass("pressed");
    }, 100);
}

function playSound(name) {
    sound_to_play = button_colors.indexOf(name);
    audio[sound_to_play].play();
}

function checkAnswer() {
    for (var i = 0; i < user_click_pattern.length; i++) {
        if (user_click_pattern[i] == game_pattern[i]) {
        } else {
            gameOver();
        }
    }
    if (user_click_pattern.length == game_pattern.length && playing) {
        setTimeout(nextSequence, 1000);
    }
}

function gameOver() {
    $("h1").text(
        "You reached level " + level + "\nPress any key to start again."
    );

    level = 0;
    user_click_pattern = [];
    game_pattern = [];
    playing = false;
}

$(".btn").on("click", function () {
    clicked_button = $(this).attr("id");

    flashElement("#" + clicked_button);
    playSound(clicked_button);

    user_click_pattern.push(clicked_button);

    checkAnswer();
});

$("body").on("keypress", function () {
    // console.log("User = " + user_click_pattern[i]);
    // console.log("Game = " + game_pattern[i]);
    // console.log(user_click_pattern[i] + "=" + game_pattern[i]);
    // console.log("i = " + i);
    console.log(user_click_pattern);
    console.log(game_pattern);
    if (playing == false) {
        playing = true;
        nextSequence();
    }
});
