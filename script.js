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

let gameCount = 0;

function game() {
    let playerScore = 0;
    let computerScore = 0;
    while(gameCount < 5) {
        console.log(`Your score: ${playerScore}, computer score: ${computerScore}.`)
        const player = prompt("Enter your choice:");
        switch(player.toLowerCase()) {
            case "rock":
            case "paper":
            case "scissors":
                break;
            default:    
                console.log('Invalid selection, try again.');
                continue;
        }
        const computer = getComputerChoice();
        if (player === computer) {
            continue;
        }
        const start = playRound(player, computer);
        console.log(start);
        if (start.substring(0, 7) === "You win") {
            playerScore += 1;
        } 
        
        if (start.substring(0, 8) === "You lose") {
            computerScore += 1;
        }
        gameCount += 1;
    }
    console.log(`Your score: ${playerScore}, computer score: ${computerScore}.`)
    playerScore > computerScore ? console.log("You win!") : console.log("You lose!");
};