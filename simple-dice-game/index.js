const get_random_number = () => {
    return Math.floor(Math.random() * 6) + 1;
};

let dice1 = "images\\dice" + get_random_number() + ".png";
let dice2 = "images\\dice" + get_random_number() + ".png";

document.querySelector(".img1").setAttribute("src", dice1);
document.querySelector(".img2").setAttribute("src", dice2);

let message;

if (dice1 > dice2) {
    message = "🚩Player 1 wins";
} else if (dice1 == dice2) {
    message = "🚩It's a tie🚩";
} else {
    message = "Player 2 wins🚩";
}

document.querySelector("h1").textContent = message;
