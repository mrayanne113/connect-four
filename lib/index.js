const Game = require('./Game.js');


const canvas = document.getElementById('grid');
const context = canvas.getContext('2d');

context.strokeStyle = 'black';
context.lineWidth = 2;

let game = new Game(context, canvas.height, canvas.width);

game.gameLoop();

for(let i = 0; i <= 700; i = i + 100) {
  context.moveTo(i, 0);
  context.lineTo(i, 700);
  context.stroke();
  for (let j = 0; j <= 700; j = j + 100) {
    context.moveTo(0, j);
    context.lineTo(700, j);
    context.stroke();
  }
}

// context.drawImage(firstChecker, 10, 10);

// window.onload = function () {
//   let img = document.querySelectorAll('html');
//   context.drawImage(img, 10, 10);
// };

// function drawImage() {
//   let red = document.querySelector('.red-checker');
//   context.rect(0, 0, 75, 75);
//   context.fillStyle = red;
//   context.fill();
// }

// drawImage();


// module.exports = Game;