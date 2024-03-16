const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");
let userChoice;
let computerChoice;
let Result;

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener("click", (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult();
}));

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length);
    
    if (randomNumber === 0) {
        computerChoice = "Rock";
    }
    if (randomNumber === 1) {
        computerChoice = "Scissors";
    }
    if (randomNumber === 2) {
        computerChoice = "Paper";
    }
    computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult() {
    if (computerChoice == userChoice) {
        Result = "it's a draw";
    }
    if (computerChoice == "Rock" && userChoice == "Paper") {
        Result = "you win!";
    }
    if (computerChoice == "Rock" && userChoice == "Scissors") {
        Result = "you lost!";
    }
    if (computerChoice == "Paper" && userChoice == "Scissors") {
        Result = "you win!";
    }
    if (computerChoice == "Paper" && userChoice == "Rock") {
        Result = "you lost!";
    }
    if (computerChoice == "Scissors" && userChoice == "Rock") {
        Result = "you win!";
    }
    if (computerChoice == "Scissors" && userChoice == "Paper") {
        Result = "you lost!";
    }
    resultDisplay.innerHTML = Result;
}