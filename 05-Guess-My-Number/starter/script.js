'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function(message) {
document.querySelector('.message').textContent = message
}

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess'). value);
console.log(guess, typeof guess);


// When guess is zero
if (!guess) {
if (score > 0) {
    displayMessage('No number!');
} else {
    displayMessage('You had loos this game!')
};
// When guess is correct
} else if (guess === secretNumber && score > 0) {
    displayMessage('Correct number!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
    };
    // When guess is too low or high
} else if (guess !== secretNumber) {
    if (score > 0) {
        displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!');
    score--;
    document.querySelector('.score').textContent = score
} else {
    displayMessage('You had loos this game!');
};
};
});


document.querySelector('.again').addEventListener('click', function() {
score = 20;
displayMessage('Start guessing...');
document.querySelector('.number').style.width = '15rem';
document.querySelector('.number').textContent = '?';
secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('body').style.backgroundColor = '#222';
document.querySelector('.guess').value = '';
document.querySelector('.score').textContent = "20"
});