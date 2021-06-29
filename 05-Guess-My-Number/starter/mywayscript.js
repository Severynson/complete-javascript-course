'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 20;

// console.log(document.querySelector('.guess').value);
// document.querySelector('.guess').value = 23;

// console.log(document.querySelector('.label-score').textContent);
// console.log(document.querySelector('.label-score').textContent = 'everyone are equal!!!')


const secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

document.querySelector('.number').textContent = secretNumber;


document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess'). value);
console.log(guess, typeof guess);



if (guess == 0) {

    document.querySelector('.message').textContent = 'No number!'

/////////////////////////////////////

    document.querySelector('.score').textContent = (document.querySelector('.score').textContent) - 1;

/////////////////////////////////////

} else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct number!';
} else if (guess < secretNumber) {
    document.querySelector('.message').textContent = 'Too low!';
} else if (guess > secretNumber) {
    document.querySelector('.message').textContent = 'Too high!';
};


//scoreCounting(Number(document.querySelector('.score').textContent));

});


//document.querySelector('.score').textContent = 101;

// console.log(document.querySelector('.score').textContent = 20)

// const scoreCounting = function (scoreNumber) {
//     for  (scoreNumber; guess == 0 || guess > secretNumber || guess < secretNumber ; Number(document.querySelector('.score').textContent)--) {}


 //  console.log(document.querySelector('.score').textContent)
// }
