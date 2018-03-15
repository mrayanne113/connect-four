// const index = require('./index.js')
const Board = require('./Board.js');
const Player1 = require('./Player1.js');
const Player2 = require('./Player2.js');
const Checkers = require('./Checkers.js');
const Keyboard = require('./Keyboard.js');


class Game {
  constructor(context, canvasHeight, canvasWidth) {
    this.canvasHeight = canvasHeight;
    this.canvasWidth = canvasWidth;
    this.context = context;
    this.gameLoop = this.gameLoop.bind(this);
  }

  drawBoard(context){

    let board = function() {
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
  }
  
  }

  gameLoop(context) {
    // this.context.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
    // this.blockOne.draw(this.context);
   // context.draw(this.drawBoard(context))

    window.requestAnimationFrame(this.gameLoop.bind(this));
  }
}

module.exports = Game;




