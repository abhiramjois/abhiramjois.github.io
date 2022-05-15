'use strict';
let highScore = 0;
let scoreValue = Number(document.querySelector('.score').textContent);
let numValue = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').value = numValue;
const guess = Number(document.querySelector('.guess').value);

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.highscore').textContent = highScore;
  document.querySelector('.score').textContent = 5;
  scoreValue = Number(document.querySelector('.score').textContent);
  numValue = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').value = numValue;
  console.log(numValue);
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.check').style.visibility = 'visible';
});

function victory() {
  document.querySelector('.number').textContent = numValue;
  document.querySelector('.message').textContent = 'Correct Answer 🎉';
  document.querySelector('body').style.backgroundColor = 'green';
  document.querySelector('.check').style.visibility = 'hidden';
  if (scoreValue > highScore) {
    highScore = scoreValue;
  }
}

function gameOver() {
  document.querySelector('.number').textContent = numValue;
  document.querySelector('.message').textContent = 'Game Over ❌';
  document.querySelector('body').style.backgroundColor = 'red';
  document.querySelector('.check').style.visibility = 'hidden';
}

function scoreCheck() {
  scoreValue--;
  document.querySelector('.score').textContent = scoreValue;
  if (scoreValue === 0 && guess != numValue) {
    gameOver();
  }
}

const checkValue = function () {
  const guess = Number(document.querySelector('.guess').value);
  //   console.log(guess, typeof guess);

  if (guess > 0 && guess < 21 && guess) {
    if (guess < numValue) {
      document.querySelector('.message').textContent = 'Try a greater value';
      scoreCheck();
    } else if (guess > numValue) {
      document.querySelector('.message').textContent = 'Try a lesser value ';
      scoreCheck();
    } else if (guess === numValue) {
      victory();
    }
  } else {
    document.querySelector('.message').textContent = '⛔ Invalid input';
  }
};

document.querySelector('.check').addEventListener('click', checkValue);

document.addEventListener('keydown', function (e) {
  if (
    e.key === 'Enter' &&
    document.querySelector('.number').textContent == '?'
  ) {
    checkValue();
  }
});
