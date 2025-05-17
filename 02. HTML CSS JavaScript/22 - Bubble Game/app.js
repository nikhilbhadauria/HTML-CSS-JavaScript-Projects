let timer = 60;
let score = 0;
let hitNumber = 0;
let timerInterval;

const hitVal = document.querySelector("#hitval");
const timerVal = document.querySelector("#timerval");
const scoreVal = document.querySelector("#scoreval");
const pbtm = document.querySelector("#pbtm");
const restartBtn = document.querySelector("#restartBtn");

function getNewHit() {
    hitNumber = Math.floor(Math.random() * 10);
    hitVal.textContent = hitNumber;
}

function makeBubbles() {
    let clutter = "";
    for (let i = 0; i < 78; i++) {
        const rand = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble">${rand}</div>`;
    }
    pbtm.innerHTML = clutter;
}

function startTimer() {
    clearInterval(timerInterval);
    timer = 60;
    timerVal.textContent = timer;
    timerInterval = setInterval(() => {
        if (timer > 0) {
            timer--;
            timerVal.textContent = timer;
        } else {
            clearInterval(timerInterval);
            endGame();
        }
    }, 1000);
}

function endGame() {
    pbtm.innerHTML = `<h1 class="over">Game Over</h1>`;
}

function increaseScore() {
    score += 10;
    scoreVal.textContent = score;
}

function handleBubbleClick(e) {
    if (e.target.classList.contains("bubble")) {
        const clickedNum = Number(e.target.textContent);
        if (clickedNum === hitNumber) {
            increaseScore();
            makeBubbles();
            getNewHit();
        } else {
            clearInterval(timerInterval);
            endGame();
        }
    }
}

function resetGame() {
    score = 0;
    scoreVal.textContent = score;
    makeBubbles();
    getNewHit();
    startTimer();
}

pbtm.addEventListener("click", handleBubbleClick);
restartBtn.addEventListener("click", resetGame);

resetGame();
