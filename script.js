"use strict";


let ranNum = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMsg = function (message) {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {

    const guess = Number(document.querySelector('.guess').value);

    if (!guess) {
        displayMsg('No Number!!!');
    }
    else if (guess === ranNum) {
        displayMsg(`Correct!!!`);

        document.querySelector('.number').textContent = ranNum;

        document.querySelector('body').style.backgroundColor = '#23c50e';
        score++;
        document.querySelector('.score').textContent = score;

        if (score > highScore) {
            highScore = score;

            document.querySelector('.highscore').textContent = highScore;
        }
    }
    else if (guess != ranNum) {


        document.querySelector('body').style.backgroundColor = '#dd0707';

        document.querySelector('.message').textContent = guess > ranNum ? `Too high!` : 'Too Low!';

        score--;

        document.querySelector('.score').textContent = score;

        if (score < 1) {
            displayMsg(`You Loose!!!`);
            document.querySelector('.score').textContent = 0;
        }

    }

});

document.querySelector('.again').addEventListener('click', function () {

    ranNum = Math.trunc(Math.random() * 20) + 1;
    score = 20;

    document.querySelector('.guess').value = '';
    displayMsg('Start guessing...');
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
});