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

function displayGame() {
    
    let introArea = document.querySelector(".intro-area");
    introArea.classList.add("hidden");

    let gameArea = document.querySelector(".game-area");
    gameArea.classList.remove("hidden");

    runGame();
    
};

function runGame() {

    document.getElementById("answer-box").value = "";
    document.getElementById("answer-box").focus();
    
    randomAnimal = animals[Math.floor(Math.random() * animals.length)];
    let animalLetters = randomAnimal.name.split("");
        for (let i = animalLetters.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [animalLetters[i], animalLetters[j]] = [animalLetters[j], animalLetters[i]];
    }

    correctAnswer = randomAnimal.name;

    let anagram = document.getElementById("name");
    anagram.innerText = animalLetters.join("");

    let clue = document.querySelector(".clue span");
    clue.innerText = randomAnimal.clue;

};

const passBtn = document.getElementById("pass");
passBtn.addEventListener("click", function() {
    let randomIndex = animals.indexOf(randomAnimal);
    if (animals.length > 0) {
        animals.splice(randomIndex, 1);
    }
    console.log(animals);
    runGame();
});

const checkBtn = document.getElementById("submit");
checkBtn.addEventListener("click", checkAnswer);


function checkAnswer() {

    let userAnswer = document.getElementById("answer-box").value;
    
    if (userAnswer === correctAnswer) {
        alert("Well done!");
        incrementScore();
    } else {
        alert(`Oops! The answer was ${correctAnswer}.`)
    }

    let randomIndex = animals.indexOf(randomAnimal);
    if (animals.length > 0) {
        animals.splice(randomIndex, 1);
    } 
    // else {
    //     endGame();
    // }
    
    console.log(animals);

    runGame();

};

function incrementScore() {

    let runningScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++runningScore;

};