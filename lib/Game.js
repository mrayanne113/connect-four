const Board = require('./Board.js');
const Player1 = require('./Player1.js');
const Player2 = require('./Player2.js');
const Checker = require('./Checker.js');
const Keyboard = require('./Keyboard.js');

class Game {
  constructor(context, canvasHeight, canvasWidth) {
    this.canvasHeight = canvasHeight;
    this.canvasWidth = canvasWidth;
    this.context = context;
    this.checker = new Checker(this.context, 350, 50)
    this.gameLoop = this.gameLoop.bind(this);
  }

  drawBoard(context){
    for(let i = 0; i <= 700; i = i + 100) {
      context.strokeStyle = 'black';
      context.lineWidth = 2;
      context.moveTo(i, 0);
      context.lineTo(i, 700);
      context.stroke();

      for (let j = 0; j <= 700; j = j + 100) {
        context.moveTo(0, j);
        context.lineTo(700, j);
        context.strokeStyle = 'black';
        context.stroke();
      }
    }
  }
  
  gameLoop(context, x) {
    this.context.clearRect(0, 0, 700, 700);
    this.drawBoard(this.context)
    this.checker.draw()
    window.requestAnimationFrame(this.gameLoop);
  }
}

module.exports = Game;