const Game = require('./Game.js');
const Board = require('./Board.js');
const Player1 = require('./Player1.js');
const Player2 = require('./Player2.js');
const Checkers = require('./Checkers.js');
const Keyboard = require('./Keyboard.js');


const canvas = document.getElementById('grid');
const context = canvas.getContext('2d');

context.strokeStyle = 'black';
context.lineWidth = 2;

// for (let i = 0; i <= 700; i = i + 100) {
//   context.moveTo(i, 0);
//   context.lineTo(i, 700);
//   context.stroke();
//   for (let j = 0; j <= 700; j = j + 100) {
//     context.moveTo(0, j);
//     context.lineTo(700, j);
//     context.stroke();
//   }
// }

// context.drawImage(firstChecker, 10, 10);

// window.onload = function () {
//   let img = document.querySelectorAll('html');
//   context.drawImage(img, 10, 10);
// };

function drawImage() {
  let red = document.querySelectorAll('.red-checker');
  context.rect(0, 0, 75, 75);
  context.fillStyle = red;
  context.fill();
}

drawImage();
// class Game {
//   constructor(content, canvasHeight, canvasWidth) {
//     this.canvasHeight = canvasHeight;
//     this.canvasWidth = canvasWidth;
//     this.context = context;
//     this.gameLoop = this.gameLoop.bind(this);
//   }
//
//
//   gameLoop() {
//     this.context.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
//     this.blockOne.draw(this.context);
//
//     window.requestAnimationFrame(this.gameLoop);
//   }
// }

// module.exports = Game;