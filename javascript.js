// Randomly returns rock paper or scissors - computer play
function computerPlay() {
    let play = ['rock', 'paper', 'scissors'];
    let compPlay = play[Math.floor(Math.random() * play.length)];
    return compPlay;
}

// function for rock paper scissors game
function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock' && computerSelection === 'paper') {
        return "You lose! Paper beats rock.";
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return "You lose! Scissors beats paper.";
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return "You lose! Rock beats Scissors.";
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return "You win! Rock beats scissors!";
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return "You win! Paper beats rock!";
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return "You win! Scissors beats paper";
    } else if (playerSelection === 'rock' && computerSelection === 'rock') {
        return "It\'s a tie! Play again.";
    } else if (playerSelection === 'paper' && computerSelection === 'paper') {
        return "It\'s a tie! Play again.";
    } else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
        return "It\'s a tie! Play again.";
    } else {
        return "Not a valid input, please try again.";
    }
}

// const playerSelection = "rock";
// const computerSelection = computerPlay();
// console.log(playRound(playerSelection, computerSelection));

// function to play a 5 round rock paper scissors game
function game() {
    let result = { win: 0, tie: 0, lose: 0 };
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Choose: Rock, Paper, or Scissors").toLowerCase();
        let computerSelection = computerPlay();

        let roundResult = playRound(playerSelection, computerSelection);
        console.log(roundResult);
        if (roundResult === "You lose! Paper beats rock." || roundResult === "You lose! Scissors beats paper." || roundResult === "You lose! Rock beats Scissors.") {
            result.lose++;
        } else if (roundResult === "You win! Rock beats scissors!" || roundResult === "You win! Paper beats rock!" || roundResult === "You win! Scissors beats paper") {
            result.win++;
        } else {
            result.tie++;
        }
    }

    console.log("Wins: " + result.win);
    console.log("Losses: " + result.lose);
    console.log("Ties: " + result.tie);
}

game();