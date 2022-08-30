"use strict";

const scoreEl0 = document.querySelector("#score--0");
const scoreEl1 = document.querySelector("#score--1");
const diceImage = document.querySelector(".dice");
const btnRoll = document.querySelector(".btn--roll");
const btnNew = document.querySelector(".btn--new");
const btnHold = document.querySelector(".btn--hold");
const current0 = document.querySelector("#current--0");
const current1 = document.querySelector("#current--1");

const player0 = document.querySelector(".player--0");
const player1 = document.querySelector(".player--1");

scoreEl0.innerHTML = 0;
scoreEl1.innerHTML = 0;
diceImage.classList.add("hidden");
let currentScore = 0;
let activePlayer = 0;
const scores = [0, 0];

let totalMarks = 0;
let playing = true;

const switchPlayer = function () {
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).innerHTML = currentScore;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0.classList.toggle("player--active");
  player1.classList.toggle("player--active");
};
btnRoll.addEventListener("click", () => {
  if (playing) {
    let randamNumber = Math.trunc(Math.random() * 6) + 1;

    diceImage.classList.remove("hidden");
    diceImage.src = `dice-${randamNumber}.png`;

    if (randamNumber !== 1) {
      currentScore += randamNumber;
      document.getElementById(`current--${activePlayer}`).innerHTML =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

btnNew.addEventListener("click", () => {
  scoreEl0.innerHTML = 0;
  scoreEl1.innerHTML = 0;
  diceImage.classList.add("hidden");
  player0.classList.remove("player--winner");
  player1.classList.remove("player--winner");
  player0.classList.add("player--active");
  player1.classList.remove("player--active");
  current0.innerHTML = 0;
  current1.innerHTML = 0;
});

btnHold.addEventListener("click", () => {
  if (playing) {
    scores[activePlayer] += currentScore;

    document.getElementById(`score--${activePlayer}`).innerHTML =
      scores[activePlayer];

    if (scores[activePlayer] >= 20) {
      playing = false;
      diceImage.classList.add("hidden");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
    } else {
      switchPlayer();
    }
  }
});
