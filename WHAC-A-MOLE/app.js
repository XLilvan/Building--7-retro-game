const squares = document.querySelectorAll(".square");
const mole = document.querySelector(".mole");
const timeLeft = document.querySelector("#time-left");
const score = document.querySelector("#score");

let result = 0;
let hitPosition;
let currentTime = 60;
let timerId = null;

const randomSquare = () => {
    squares.forEach(square => {
        square.classList.remove("mole")
    });

    
    let randomSquare = squares[Math.floor(Math.random() * 9)];
    randomSquare.classList.add("mole");

    hitPosition = randomSquare.id;
};

squares.forEach(square => {
    square.addEventListener("click", () => {
        if (square.id === hitPosition) {
            result++;
            score.textContent = result;
            hitPosition = null;
        }
    })
});

const moveMole = () => {
    timerId = setInterval(randomSquare, 750);
};

moveMole();

const countDown = () => {
    currentTime--;
    timeLeft.textContent = currentTime;

    if (currentTime === 0) {
        clearInterval(countDownTimerId);
        clearInterval(timerId);
        alert("TIME OUT! Your final score is " + result);
    }
};

let countDownTimerId = setInterval(countDown, 1000);