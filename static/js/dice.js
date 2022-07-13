// modified from https://codepen.io/danilo721/pen/eYNGdBG?editors=0010

let dice1 = document.getElementById('dice1');
let dice2 = document.getElementById('dice2');
let resetButton = document.getElementById('resetDiceButton');

const rollDice = () => {
  const num1 = Math.floor(Math.random() * 6 + 1);
  const num2 = Math.floor(Math.random() * 6 + 1);
  let x1, y1, x2, y2;

  console.log(`2d6: ${num1 + num2} (${num1}+${num2})`)

  switch (num1) {
    case 1:
      x1 = 720;
      y1 = 810;
      break;
    case 6:
      x1 = 720;
      y1 = 990;
      break;
    default:
      x1 = 720 + (6 - num1) * 90;
      y1 = 900;
      break;
  }

  switch (num2) {
    case 1:
      x2 = 720;
      y2 = 810;
      break;
    case 6:
      x2 = 720;
      y2 = 990;
      break;
    default:
      x2 = 720 + (6 - num2) * 90;
      y2 = 900;
      break;
  }
  if (dice1.classList.contains('hidden')) {
    showDice();
    setTimeout(() => {
      transform(dice1, x1, y2);
      transform(dice2, x2, y2);
    }, 100);
  } else {
    transform(dice1, x1, y2);
    transform(dice2, x2, y2);
  }
}

const rollDie = (par) => {
  const num = Math.floor(Math.random() * 6 + 1);
  let x, y;

  switch (num) {
    case 1:
      x = 720;
      y = 810;
      break;
    case 6:
      x = 720;
      y = 990;
      break;
    default:
      x = 720 + (6 - num) * 90;
      y = 900;
      break;
  }

  if (par === 'luck') {
    let luck;
    switch (num) {
      case 1:
        luck = -3;
        break;
      case 2:
        luck = -2;
        break;
      case 3:
        luck = -1;
        break;
      case 4:
        luck = 1;
        break;
      case 5:
        luck = 2;
        break;
      case 6:
        luck = 3;
        break;
      default:
        console.log('something went wrong!');
    }
    const input = document.getElementById('luckInput');
    input.value = luck;

    const luckButton = document.getElementById('luckButton');
    luckButton.classList.add('hidden');

    document.getElementById('luckLabel').classList.remove('hidden');
  }

  if (dice1.classList.contains('hidden')) {
    showDie();
    setTimeout(() => {
      transform(dice1, x, y);
    }, 100);
  } else {
    transform(dice1, x, y);
  }
}

const transform = (el, x, y) => {
  el.style.transform = `translateZ(-100px) rotateY(${x}deg) rotateX(${y}deg)`;
}

const resetDice = () => {
  dice1.classList.add('hidden');
  dice2.classList.add('hidden');
  dice1.style.transform = `translateZ(-100px) rotateY(-45deg) rotateX(-45deg)`;
  dice2.style.transform = `translateZ(-100px) rotateY(-45deg) rotateX(-45deg)`;
  resetButton.classList.add('hidden');
}

const showDice = () => {
  dice1.classList.remove('hidden');
  dice2.classList.remove('hidden');
  resetButton.classList.remove('hidden')

}

const showDie = () => {
  dice1.classList.remove('hidden');
  resetButton.classList.remove('hidden')
}