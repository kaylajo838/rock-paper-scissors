// Randomly returns rock paper or scissors - computer play
function computerPlay() {
    let play = ['rock', 'paper', 'scissors'];
    let compPlay = play[Math.floor(Math.random() * play.length)];
    return compPlay;
}

// function for rock paper scissors game
function playRound(playerSelection, computerSelection) {
    let pSelection = playerSelection.toLowerCase();
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
    } else {
        return "It's a tie! Play again.";
    }
}


