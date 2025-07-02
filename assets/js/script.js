// Array of animals to be scrambled into anagrams
let animals = [
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

// Hide intro screen and begin game
function displayGame() {
    
    let introArea = document.querySelector(".intro-area");
    introArea.classList.add("hidden");

    let gameArea = document.querySelector(".game-area");
    gameArea.classList.remove("hidden");

    runGame();
    
};

// Main game function to display anagram and clue
function runGame() {

    document.getElementById("answer-box").value = ""; // clear and select input field for each go
    document.getElementById("answer-box").focus(); 
    
// Choose random animal from array and split its name into an array letter by letter
    randomAnimal = animals[Math.floor(Math.random() * animals.length)];
    let animalLetters = randomAnimal.name.split("");

    // Loop and swap pairs of letters backwards as indices through the name's array
        for (let i = animalLetters.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [animalLetters[i], animalLetters[j]] = [animalLetters[j], animalLetters[i]];
    }

    correctAnswer = randomAnimal.name; // for checkAnswer function

    let anagram = document.getElementById("name");
    anagram.innerText = animalLetters.join(""); // display anagram for users without commas

    let clue = document.querySelector(".clue span");
    clue.innerText = randomAnimal.clue; // display clue for users

};

// Pass button to show the correct answer and skip to the next anagram
const passBtn = document.getElementById("pass");
passBtn.addEventListener("click", function() {
    let randomIndex = animals.indexOf(randomAnimal);
    if (animals.length > 0) {
        animals.splice(randomIndex, 1);
    }
    alert(`Oops! The answer was ${correctAnswer}.`)
    console.log(animals);
    runGame();
});

const checkBtn = document.getElementById("submit");
checkBtn.addEventListener("click", checkAnswer);

// Checks the user's attempt against the correctAnswer from the runGame function
function checkAnswer() {

    let userAnswer = document.getElementById("answer-box").value;
    
    if (userAnswer === correctAnswer) { // displays right or wrong message for the user
        alert("Well done!");
        incrementScore();
    } else {
        alert(`Oops! The answer was ${correctAnswer}.`)
    }

    // Remove previously displayed animals in turn from the array to avoid repeats 
    let randomIndex = animals.indexOf(randomAnimal);
    if (animals.length > 1) {
        animals.splice(randomIndex, 1);
    } else {
        endGame();
    }
    
    console.log(animals);

    runGame();

};

// Reads the score as an integer in the html paragraph and adds 1 
function incrementScore() {

    let runningScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++runningScore;

};

function endGame() {

    let introArea = document.querySelector(".intro-area");
    introArea.classList.remove("hidden");

    let gameArea = document.querySelector(".game-area");
    gameArea.classList.add("hidden");

    let runningScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("message").innerText = `Great effort! Your score was ${runningScore}/10`;

    let startBtn = document.getElementById("start");
    startBtn.innerText = "Play again";
    startBtn.addEventListener("click", function() {
        location.reload()
    });
    
    
}