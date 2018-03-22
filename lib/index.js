const Game = require('./Game.js');

const canvas = document.getElementById('grid');
const context = canvas.getContext('2d');
let game = new Game(context, canvas.height, canvas.width);

document.addEventListener('keydown', first);

function first (e) {
  if (e.keyCode === 52) {
    document.removeEventListener('keydown', first);
    game.gameLoop();
    document.addEventListener('keydown', keyStateDown);
  }
}

function keyStateDown (e) {
  e.preventDefault();
  game.moveChecker(e.keyCode);
}

context.font = '20px Arial';
context.fillText('Press 4 to Start', canvas.width / 2 - 70, canvas.height / 2);