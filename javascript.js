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

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));

// function to play a 5 round rock paper scissors game
function game() {
    let pSelect = prompt("Choose: Rock, Paper, or Scissors")
    let playerSelection = pSelect.toLowerCase();
    playRound(playerSelection, computerSelection)
}