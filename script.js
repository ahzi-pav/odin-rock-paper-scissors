const choices = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    return choices[Math.floor(Math.random() * 3)];
};

function playRound(playerSelection, computerSelection) {
    const player = playerSelection.toLowerCase();
    if (player === 'rock' && computerSelection === 'paper') {
        return `You lose, ${computerSelection} beats ${player}!`
    } else if (player === 'rock' && computerSelection === 'scissors') {
        return `You win, ${player} beats ${computerSelection}!`
    } else if (player === 'paper' && computerSelection === 'scissors') {
        return `You lose, ${computerSelection} beats ${player}!`
    } else if (player === 'paper' && computerSelection === 'rock') {
        return `You win, ${player} beats ${computerSelection}!`
    } else if (player === 'scissors' && computerSelection === 'rock') {
        return `You lose, ${computerSelection} beats ${player}!`
    } else if (player === 'scissors' && computerSelection === 'paper') {
        return `You win, ${player} beats ${computerSelection}!`
    } 
};