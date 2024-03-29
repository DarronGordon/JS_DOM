"use strict";


// let ranNum = Math.trunc(Math.random() * 20) + 1;
// let score = 20;
// let highScore = 0;

// const displayMsg = function (message) {
//     document.querySelector('.message').textContent = message;
// }

// const displayHiddenNum = function (txt) {
//     document.querySelector('.number').textContent = txt;
// }

// const displayScore = function (msg) {
//     document.querySelector('.score').textContent = msg;
// }

// document.querySelector('.check').addEventListener('click', function () {

//     const guess = Number(document.querySelector('.guess').value);

//     if (!guess) {
//         displayMsg('No Number!!!');
//     }
//     else if (guess === ranNum) {
//         displayMsg(`Correct!!!`);

//         displayHiddenNum(ranNum);

//         document.querySelector('body').style.backgroundColor = '#23c50e';
//         score++;
//         displayScore(score);

//         if (score > highScore) {
//             highScore = score;

//             document.querySelector('.highscore').textContent = highScore;
//         }
//     }
//     else if (guess != ranNum) {


//         document.querySelector('body').style.backgroundColor = '#dd0707';

//         displayMsg(guess > ranNum ? `Too high!` : 'Too Low!');

//         score--;

//         displayScore(score);

//         if (score < 1) {
//             displayMsg(`You Loose!!!`);
//             document.querySelector('.score').textContent = 0;
//         }

//     }

// });

// document.querySelector('.again').addEventListener('click', function () {

//     ranNum = Math.trunc(Math.random() * 20) + 1;
//     score = 20;

//     document.querySelector('.guess').value = '';
//     displayMsg('Start guessing...');
//     document.querySelector('body').style.backgroundColor = '#222';
//     displayScore(score);
//     displayHiddenNum('?');
// });

// ///////////////////////////Chalange #2

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnClose = document.querySelector('.close-modal');
const openModal = document.querySelectorAll('.show-modal');

const closeModalFunc = () => {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

const openModalFunc = () => {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

for (let index = 0; index < openModal.length; index++) {
    openModal[index].addEventListener('click', openModalFunc);
}



btnClose.addEventListener('click', closeModalFunc);

overlay.addEventListener('click', closeModalFunc);

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModalFunc();
    }
});