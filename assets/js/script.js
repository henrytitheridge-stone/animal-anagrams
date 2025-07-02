const animals = [
    {
        name: "elephant",
        clue: "The biggest land animal in the world."
    },
    {
        name: "lion",
        clue: "The king of the big cats."
    },
    {
        name: "cheetah",
        clue: "The fastest land animal in the world."
    },
    {
        name: "giraffe",
        clue: "An animal with a long neck for reaching leaves."
    },
    {
        name: "penguin",
        clue: "A flightless bird from Antarctica."
    },
    {
        name: "spider",
        clue: "A creepy-crawly with eight legs."
    },
    {
        name: "dolphin",
        clue: "A super speedy, high-jumping marine mammal."
    },
    {
        name: "gorilla",
        clue: "A big, strong forest primate."
    },
    {
        name: "crocodile",
        clue: "A scaly, snappy river reptile."
    }
];

// document.addEventListener("DOMContentLoaded", function () {
    
//     let startGame = document.getElementById("start");
//     startGame.addEventListener("click", displayGame());
    
// });

function displayGame() {
    
    let introArea = document.querySelector(".intro-area");
    introArea.classList.add("hidden");

    let gameArea = document.querySelector(".game-area");
    gameArea.classList.remove("hidden");

    runGame();
    
}

// const passBtn = document.getElementById("pass");
// passBtn.addEventListener("click", runGame)

function runGame() {
    
    let animal = animals[Math.floor(Math.random() * animals.length)];
    let animalLetters = animal.name.split("");
    for (let i = animalLetters.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [animalLetters[i], animalLetters[j]] = [animalLetters[j], animalLetters[i]];
    }

    let anagram = document.getElementById("name");
    anagram.innerText = animalLetters.join("");

    let clue = document.querySelector(".clue span");
    clue.innerText = animal.clue;

};
/* runGame(); */


function checkAnswer() {

}

function incrementScore() {

}