const choices = ['rock', 'paper', 'scssors'];

function getComputerChoice() {
    return choices[Math.floor(Math.random() * 3)];
};