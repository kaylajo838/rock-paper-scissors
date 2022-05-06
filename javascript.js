const btnRock = document.querySelector('#rock');
const btnPaper = document.querySelector('#paper');
const btnScissors = document.querySelector('#scissors');
const result = document.querySelector('#final-result');
const resultRound = document.querySelector('#round-result');
const div = document.createElement('div')
const playerAmount = document.querySelector('#player-score');
const computerAmount = document.querySelector('#computer-score');
const tieAmount = document.querySelector('#tie-score');

// global variable for scores
let playerScore = 0;
let computerScore = 0;
let tieScore = 0;

// Randomly returns rock paper or scissors - computer play
function computerPlay() {
    let play = ['rock', 'paper', 'scissors'];
    let compPlay = play[Math.floor(Math.random() * play.length)];
    return compPlay;
}

// function for rock paper scissors game
function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock' && computerSelection === 'paper') {
        computerWin();
        div.textContent = "You lose! Paper beats rock.";
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        computerWin();
        div.textContent = "You lose! Scissors beats paper.";
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        computerWin();
        div.textContent = "You lose! Rock beats scissors.";
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerWin();
        div.textContent = "You win! Rock beats scissors!";
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerWin();
        div.textContent = "You win! Paper beats rock!";
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerWin();
        div.textContent = "You win! Scissors beats paper!";
    } else if (playerSelection === 'rock' && computerSelection === 'rock') {
        tieWin();
        div.textContent = "It\'s a tie! Play again.";
    } else if (playerSelection === 'paper' && computerSelection === 'paper') {
        tieWin();
        div.textContent = "It\'s a tie! Play again.";
    } else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
        tieWin();
        div.textContent = "It\'s a tie! Play again.";
    } else {
        alert("Not a valid input, please try again.");
    }
}

// rock button plays
btnRock.addEventListener('click', function () {
    let playerSelection = 'rock';
    let computerSelection = computerPlay();
    let roundResult = playRound(playerSelection, computerSelection);
    if (computerSelection === 'paper') {
        resultRound.appendChild(div);
    } else if (computerSelection === 'scissors') {
        resultRound.appendChild(div);
    } else {
        resultRound.appendChild(div);
    }
})

// paper button plays
btnPaper.addEventListener('click', function () {
    let playerSelection = 'paper'
    let computerSelection = computerPlay();
    let roundResult = playRound(playerSelection, computerSelection);
    if (computerSelection === 'scissors') {
        resultRound.appendChild(div);
    } else if (computerSelection === 'rock') {
        resultRound.appendChild(div);
    } else {
        resultRound.appendChild(div);
    }
})

// scissors button plays
btnScissors.addEventListener('click', function () {
    let playerSelection = 'scissors';
    let computerSelection = computerPlay();
    let roundResult = playRound(playerSelection, computerSelection);
    if (computerSelection === 'rock') {
        resultRound.appendChild(div);
    } else if (computerSelection === 'paper') {
        resultRound.appendChild(div);
    } else {
        resultRound.appendChild(div);
    }
})

// functions to change text content after wins
function playerWin() {
    ++playerScore;
    playerAmount.textContent = `Your score is: ${playerScore}`;
}

function computerWin() {
    ++computerScore;
    computerAmount.textContent = `The computer's score is: ${computerScore}`;
}

function tieWin() {
    ++tieScore;
    tieAmount.textContent = `Tie Rounds: ${tieScore}`;
}

if (playerScore === 5) {
    const para = document.createElement('p');
    para.textContent = "Congratulations! You win!";
    result.appendChild(para);
} else if (computerScore === 5) {
    const para = document.createElement('p');
    para.textContent = "Sorry! Computer wins, please play again!";
    result.appendChild(para);
}

// function to play a 5 round rock paper scissors game
// function game() {
//     let result = { win: 0, tie: 0, lose: 0 };
//     for (let i = 0; i < 5; i++) {
//         let playerSelection = prompt("Choose: Rock, Paper, or Scissors").toLowerCase();
//         let computerSelection = computerPlay();

//         let roundResult = playRound(playerSelection, computerSelection);
//         console.log(roundResult);
//         if (roundResult === "You lose! Paper beats rock." || roundResult === "You lose! Scissors beats paper." || roundResult === "You lose! Rock beats Scissors.") {
//             result.lose++;
//         } else if (roundResult === "You win! Rock beats scissors!" || roundResult === "You win! Paper beats rock!" || roundResult === "You win! Scissors beats paper") {
//             result.win++;
//         } else if (roundResult === "It\'s a tie! Play again.") {
//             result.tie++;
//         } else {
//             i--;
//         }
//     }

//     console.log("Wins: " + result.win);
//     console.log("Losses: " + result.lose);
//     console.log("Ties: " + result.tie);
// }

// game();

