const Game = require('./Game.js');

const canvas = document.getElementById('grid');
const context = canvas.getContext('2d');
let game = new Game(context, canvas.height, canvas.width);

// document.addEventListener('keydown', keyStateDown);
// document.addEventListener('keyup', keyStateUp);

let spaceKeyPress = false;
let rightKeyPress = false;
let leftKeyPress = false;

// function keyStateDown(e) {
//   e.preventDefault();
//   if (e.keyCode === 37){
//     leftKeyPress = true;
//     game.checker.moveLeft();
//   } else if (e.keyCode === 39) {
//     rightKeyPress = true;
//     checker.moveRight()
//   }
// }

game.gameLoop();