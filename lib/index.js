const Game = require('./Game.js');

const canvas = document.getElementById('grid');
const context = canvas.getContext('2d');

context.strokeStyle = 'black';
context.lineWidth = 2;

let game = new Game(context, canvas.height, canvas.width);


game.gameLoop();

// for(let i = 0; i <= 700; i = i + 100) {
//   context.moveTo(i, 0);
//   context.lineTo(i, 700);
//   context.stroke();
//   for (let j = 0; j <= 700; j = j + 100) {
//     context.moveTo(0, j);
//     context.lineTo(700, j);
//     context.stroke();
//   }
// }
