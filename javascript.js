// Randomly returns rock paper or scissors - computer play
function computerPlay() {
    let play = ['rock', 'paper', 'scissors'];
    let compPlay = play[Math.floor(Math.random() * play.length)];
    return compPlay;
}

// function for rock paper scissors game
function playRound(playerSelection, computerSelection) {
    let pSelect = prompt("Choose: Rock, Paper, or Scissors")
    let pSelection = pSelect.toLowerCase();
    if (pSelection === 'rock' && computerSelection === 'paper') {
        return "You lose! Paper beats rock.";
    } else if (pSelection === 'paper' && computerSelection === 'scissors') {
        return "You lose! Scissors beats paper.";
    } else if (pSelection === 'scissors' && computerSelection === 'rock') {
        return "You lose! Rock beats Scissors.";
    } else if (pSelection === 'rock' && computerSelection === 'scissors') {
        return "You win! Rock beats scissors!";
    } else if (pSelection === 'paper' && computerSelection === 'rock') {
        return "You win! Paper beats rock!";
    } else if (pSelection === 'scissors' && computerSelection === 'paper') {
        return "You win! Scissors beats paper";
    } else if (pSelection === 'rock' && computerSelection === 'rock') {
        return "It's a tie! Play again.";
    } else if (pSelection === 'paper' && computerSelection === 'paper') {
        return "It's a tie! Play again.";
    } else if (pSelection === 'scissors' && computerSelection === 'scissors') {
        return "It's a tie! Play again.";
    } else {
        return "Not a valid input, please try again."
    }
}

// function to play a 5 round rock paper scissors game
function game() {

}