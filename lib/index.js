const Game = require('./Game.js');

const canvas = document.getElementById('grid');
const context = canvas.getContext('2d');
let game = new Game(context, canvas.height, canvas.width);

document.addEventListener('keydown', keyStateDown);

function keyStateDown (e) {
  e.preventDefault();
  game.moveChecker(e.keyCode);
}

game.gameLoop();

