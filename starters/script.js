'use strict';
// Global Declarations
let diceRoll = document.querySelector('.btn--roll');
let playerZeroScore = document.querySelector('#score--0');
let playerOneScore = document.querySelector('#score--1');
// let playerScores = [playerZeroScore, playerOneScore];
let currentScoreZero = document.querySelector('#current--0');
let currentScoreOne = document.querySelector('#current--1');
let newGame = document.querySelector('.btn--new');
let playerZero = document.querySelector('.player--0');
let playerOne = document.querySelector('.player--1');
let dice = document.querySelector('.dice');
dice.classList.remove('darken');
let holdValue = document.querySelector('.btn--hold');
playerZero.classList.remove('player--winner');
diceRoll.classList.remove('btn--fin');

// On click of new game button
newGame.addEventListener('click', function () {
  playerZero.classList.add('player--active');
  playerOne.classList.remove('player--active');
  playerZeroScore.textContent = '0';
  playerOneScore.textContent = '0';
  currentScoreZero.textContent = '0';
  currentScoreOne.textContent = '0';
  playerZero.classList.remove('player--winner');
  playerOne.classList.remove('player--winner');
  diceRoll.classList.remove('btn--fin');
  holdValue.classList.remove('btn--fin');
  document.querySelector('#name--0').textContent = 'Player 1';
  document.querySelector('#name--1').textContent = 'Player 2';
});

function playerPass() {
  if (playerZero.classList.contains('player--active')) {
    playerOne.classList.add('player--active');
    playerZero.classList.remove('player--active');
    currentScoreZero.textContent = '0';
  } else {
    playerZero.classList.add('player--active');
    playerOne.classList.remove('player--active');
    currentScoreOne.textContent = '0';
  }
}

function declareWinner() {
  if (Number(playerZeroScore.textContent) >= 100) {
    document.querySelector('#name--0').textContent = 'Player 1 wins the game';
    playerZero.classList.add('player--winner');
  } else {
    document.querySelector('#name--1').textContent = 'Player 2 wins the game';
    playerOne.classList.add('player--winner');
  }
  diceRoll.classList.add('btn--fin');
  holdValue.classList.add('btn--fin');
}

function hunderedCheck(score) {
  if (score >= 100) {
    declareWinner();
    playerPass();
  }
}

function addIterate(a, b) {
  if (typeof a == 'object' && typeof b == 'object') {
    a.textContent = `${Number(a.textContent) + Number(b.textContent)}`;
    return a.textContent;
  } else {
    a.textContent = `${Number(a.textContent) + Number(b)}`;
    return a.textContent;
  }
}

// On click of roll dice
diceRoll.addEventListener('click', function () {
  const rollValue = Math.floor(Math.random() * 6) + 1;
  switch (rollValue) {
    case 1:
      document.querySelector('img.dice').src = 'dice-1.png';
      break;

    case 2:
      document.querySelector('.dice').src = 'dice-2.png';
      break;

    case 3:
      document.querySelector('.dice').src = 'dice-3.png';
      break;

    case 4:
      document.querySelector('.dice').src = 'dice-4.png';
      break;

    case 5:
      document.querySelector('.dice').src = 'dice-5.png';
      break;

    case 6:
      document.querySelector('.dice').src = 'dice-6.png';
      break;

    default:
      console.log('error');
      break;
  }
  if (rollValue === 1) playerPass();
  else {
    if (playerZero.classList.contains('player--active')) {
      addIterate(currentScoreZero, rollValue);
    } else {
      addIterate(currentScoreOne, rollValue);
    }
  }
});
diceRoll.addEventListener('mousedown', function () {
  dice.classList.add('darken');
});
diceRoll.addEventListener('mouseup', function () {
  dice.classList.remove('darken');
});

holdValue.addEventListener('click', function () {
  console.log(Number(playerZeroScore.textContent));
  if (playerZero.classList.contains('player--active')) {
    addIterate(playerZeroScore, currentScoreZero);
    hunderedCheck(Number(playerZeroScore.textContent));
    playerPass();
  } else {
    addIterate(playerOneScore, currentScoreOne);
    hunderedCheck(Number(playerOneScore.textContent));
    playerPass();
  }
});
