const Game = require('./Game.js');
const Checker = require('./Checker.js');

const canvas = document.getElementById('grid');
const context = canvas.getContext('2d');
let game = new Game(context, canvas.height, canvas.width);

document.addEventListener('keydown', keyStateDown);
document.addEventListener('keyup', keyStateUp);

 
let spaceKeyPress = false;
let rightKeyPress = false;
let leftKeyPress = false;

function keyStateDown(e) {
  e.preventDefault();
  console.log(e.keyCode)
  if (e.keyCode === 37){
    leftKeyPress = true;
    console.log(game.checker.x)
    game.checker.moveLeft();
  } else if (e.keyCode === 39) {
    rightKeyPress = true;
    checker.moveRight()
  }
}

function keyStateUp(e) {
  e.preventDefault();
  console.log(e.keyCode)
  if (e.keyCode === 37){
    leftKeyPress = false;
    // console.log('left')
  } else if (e.keyCode === 39) {
    // console.log('right')
    rightKeyPress = false;
  }
}

game.gameLoop();