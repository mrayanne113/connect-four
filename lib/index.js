const Game = require('./Game.js');
const Checker = require('./Checker.js');

const canvas = document.getElementById('grid');
const context = canvas.getContext('2d');
let checker = new Checker();


document.addEventListener('keydown', function(e){
  e.preventDefault();
  checker.moveChecker(e.keyCode);
});

context.strokeStyle = 'black';
context.lineWidth = 2;

let game = new Game(context, canvas.height, canvas.width);

game.gameLoop();