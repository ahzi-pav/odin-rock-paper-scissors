const choices = ['rock', 'paper', 'scissors'];

let playerScore = 0;
let computerScore = 0;

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
    } else if (player === computerSelection) {
        return `Draw, you both chose ${player}!`;
    }
};

const container = document.querySelector('#container');

const buttonContainer = container.querySelector("#button-container");

const display = document.createElement('h1');
display.textContent = 'Click a button to play!';
container.appendChild(display);

const displayScore = document.createElement('h1');
displayScore.textContent = `player score: ${playerScore} computer score: ${computerScore}`;
container.appendChild(displayScore);

const rockButton = buttonContainer.querySelector('#rock-button');

rockButton.addEventListener('click', () => {
    const play = playRound('rock', getComputerChoice());
    if (play.includes('win')) {
        playerScore += 1;
    } else if (play.includes('lose')) {
        computerScore += 1;
    }
    display.textContent = play;
    displayScore.textContent = `player score: ${playerScore} computer score: ${computerScore}`;
    if (playerScore === 5) {
        display.textContent = "Congratulations! You win the series."
        playerScore = 0;
        computerScore = 0;
        displayScore.textContent = `player score: ${playerScore} computer score: ${computerScore}`;
    } else if (computerScore === 5) {
        display.textContent = "Better luck next time! You lose the series."
        playerScore = 0;
        computerScore = 0;
        displayScore.textContent = `player score: ${playerScore} computer score: ${computerScore}`;
    };
});

const paperButton = buttonContainer.querySelector('#paper-button');

paperButton.addEventListener('click', () => {
    const play = playRound('paper', getComputerChoice());
    if (play.includes('win')) {
        playerScore += 1;
    } else if (play.includes('lose')) {
        computerScore += 1;
    }
    display.textContent = play;
    displayScore.textContent = `player score: ${playerScore} computer score: ${computerScore}`;
    if (playerScore === 5) {
        display.textContent = "Congratulations! You win the series."
        playerScore = 0;
        computerScore = 0;
        displayScore.textContent = `player score: ${playerScore} computer score: ${computerScore}`;
    } else if (computerScore === 5) {
        display.textContent = "Better luck next time! You lose the series."
        playerScore = 0;
        computerScore = 0;
        displayScore.textContent = `player score: ${playerScore} computer score: ${computerScore}`;
    };
});

const scissorsButton = buttonContainer.querySelector('#scissors-button');

scissorsButton.addEventListener('click', () => {
    const play = playRound('scissors', getComputerChoice());
    if (play.includes('win')) {
        playerScore += 1;
    } else if (play.includes('lose')) {
        computerScore += 1;
    }
    display.textContent = play;
    displayScore.textContent = `player score: ${playerScore} computer score: ${computerScore}`;
    if (playerScore === 5) {
        display.textContent = "Congratulations! You win the series."
        playerScore = 0;
        computerScore = 0;
        displayScore.textContent = `player score: ${playerScore} computer score: ${computerScore}`;
    } else if (computerScore === 5) {
        display.textContent = "Better luck next time! You lose the series."
        playerScore = 0;
        computerScore = 0;
        displayScore.textContent = `player score: ${playerScore} computer score: ${computerScore}`;
    };
});

