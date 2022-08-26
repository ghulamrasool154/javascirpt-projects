'use strict';

// const check = ()=>{
//   const number = (document.querySelector('.number').innerHTML = 90);
//   const guess = (document.querySelector('.guess').value = 10);
//   const score = (document.querySelector('.score').innerHTML = 5);
//   const message = (document.querySelector('.message').innerHTML = 10);
//  const highscore = document.querySelector('.highscore').innerHTML = 10
// }
// guess input filed class
// number class
// score
// highscore

// const number = (document.querySelector('.number').innerHTML = numberSecrt);

let scoreUpdate = 20;
let secertNumber = '';

let highscore = document.querySelector('.highscore').innerHTML;
const numberSecrt = Math.trunc(Math.random() * 20) + 1;

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').innerHTML = '⛔ No number ';
  } else if (guess === numberSecrt) {
    secertNumber = guess;
    highscore = document.querySelector('.highscore').innerHTML = scoreUpdate;

    console.log('Guess and secrat umber is same', numberSecrt, guess);

    document.querySelector('.number').innerHTML = guess;
    //     document.querySelector('.number').style.cssText = `
    //     width : 30rem;
    //     background-color : #950000;
    //     color : white;
    //   `;
    document.querySelector('.number').classList.add('bgs');
    document.querySelector('.message').innerHTML = 'Correct Number ';
    document.querySelector('body').classList.add('bodyclass');
    // .style.backgroundColor = '#3e0404';
  } else if (guess > numberSecrt) {
    if (scoreUpdate > 1) {
      document.querySelector('.message').innerHTML = '😍 Too High !';

      scoreUpdate = scoreUpdate - 1;

      document.querySelector('.score').innerHTML = scoreUpdate;

      console.log(`Guess Number ${guess} > Secrat number ${numberSecrt}`);

      document.querySelector('body').classList.remove('bodyclass');

      document.querySelector('.number').innerHTML = '?';
    } else {
      document.querySelector('.message').innerHTML = 'You lose the game!';
      document.querySelector('.score').innerHTML = 0;
    }
  } else if (guess < numberSecrt) {
    if (scoreUpdate > 1) {
      document.querySelector('.message').innerHTML = 'Too Low!';

      scoreUpdate = scoreUpdate - 1;

      document.querySelector('.score').innerHTML = scoreUpdate;

      console.log(`Guess Number ${guess} > Secrat number ${numberSecrt}`);

      document.querySelector('body').classList.remove('bodyclass');

      document.querySelector('.number').innerHTML = '?';
    } else {
      document.querySelector('.message').innerHTML = 'You lose the game!';
      document.querySelector('.score').innerHTML = 0;
    }
  }

  //   if (guess >= 1 && guess <= 20) {
  //     document.querySelector('.message').innerHTML = guess + ' Correct Number 👌';
  //   } else {
  //     document.querySelector('.message').innerHTML =
  //       '❌❌❌❌❌ Please Enter Corrent Number between 1 to 20 🙏';
  //   }
});

//  try again

document.querySelector('.again').addEventListener('click', () => {
  document.querySelector('.number').innerHTML = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = 20;
  document.querySelector('.highscore').textContent = 0;
  document.querySelector('.number').classList.remove('bgs');
  document.querySelector('body').classList.remove('bodyclass');
});
