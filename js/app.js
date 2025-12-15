import {
  elRobot, elGameZone, elHands, elRefreshGameButton, elResultZone, elUser,
} from './html-elements.js';

// robot choose

function robotChoose() {
  const hands = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.trunc(Math.random() * hands.length);
  return hands[randomIndex];
}


function swapZone(showResult) {
  if (showResult) {
    elGameZone.classList.add('hidden');
    elResultZone.classList.remove('hidden');
  } else {
    elGameZone.classList.remove('hidden');
    elResultZone.classList.add('hidden');
  }
}

// Find winner

function checkWinner(user, robot) {
  if(user === robot) {
    return "TIE"
  } else if(user === "paper" && ai === "scissors") {
    return "ROBOT";
  } else if (user === 'scissors' && ai === 'rock') {
    return 'ROBOT';
  } else if (user === 'rock' && ai === 'paper') {
    return 'ROBOT';
  } else {
    return "USER"
  }
}


elResultZone.classList.add('hidden');

elHands.forEach((elHand) => {
  elHand.addEventListener('click', (evt) => {
    swapZone(true);
    const user = evt.target.alt;
    const robot = robotChoose();

    elUser.src = evt.target.src;
    elRobot.src = './img/choosing.svg';
    setTimeout(() => {
      elRobot.src = `./img/${robot}.svg`;
      const winner = checkWinner(user, robot)
      console.log(winner);
    }, 1000);
  });
});

// Refresh game

elRefreshGameButton.addEventListener('click', () => {
  swapZone(false);
});