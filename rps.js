const rockBtn = document.querySelector("div#game button#rock");
const paperBtn = document.querySelector("div#game button#paper");
const scissorsBtn = document.querySelector("div#game button#scissors");
const resultPara = document.querySelector("div#game p#result");

/*
    0 = Rock
    1 = Paper
    2 = Scissors
*/
function randomPlay() {
    let rnd = Math.random();

    if(rnd < 0.3) {
        return 0;
    } else if(rnd > 0.3 && rnd < 0.6) {
        return 1;
    } else {
        return 2;
    }
}

/*
    0 = No Winner
    1 = Player One won
    2 = CPU won
*/
function playRound(userPlay) {
    const comp = randomPlay();
    userPlay = userPlay.toLowerCase();

    if(userPlay == "rock") {
        userPlay = 0;
    } else if(userPlay == "paper") {
        userPlay = 1;
    } else {
        userPlay = 2;
    }

    if(comp === userPlay) {
        return 0;
    } else if(comp === 0 && userPlay === 1) {
        return 1;
    } else if(comp === 0 && userPlay === 2) {
        return 2;
    } else if(comp === 1 && userPlay === 0) {
        return 2;
    } else if(comp === 1 && userPlay === 2) {
        return 1;
    } else if(comp === 2 && userPlay === 0) {
        return 2;
    } else if(comp === 2 && userPlay === 1) {
        return 1;
    }

    return 0;
}

function calculateWinner(str) {
    let res = playRound(str);

    console.log(res);

    if(res === 0) {
        resultPara.textContent = "It's a draw!";
    } else if(res === 1) {
        resultPara.textContent = "Congratulations! You won!";
    } else if(res === 2) {
        resultPara.textContent = "You lost! Better luck next time!";
    }
}

rockBtn.addEventListener('click', (e) => {
    paperBtn.disable = true;
    scissorsBtn.disable = true;
    calculateWinner("rock");
    paperBtn.disable = false;
    scissorsBtn.disable = false;
});

paperBtn.addEventListener('click', (e) => {
    rockBtn.disable = true;
    scissorsBtn.disable = true;
    calculateWinner("paper");
    paperBtn.disable = false;
    scissorsBtn.disable = false;
});

scissorsBtn.addEventListener('click', (e) => {
    paperBtn.disable = true;
    rockBtn.disable = true;
    calculateWinner("scissors");
    paperBtn.disable = false;
    scissorsBtn.disable = false;
});