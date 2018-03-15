const Board = require('./Board.js');
const Player1 = require('./Player1.js');
const Player2 = require('./Player2.js');
const Checker = require('./Checker.js');
const Keyboard = require('./Keyboard.js');

let checker = new Checker(game.context);


class Game {
  constructor(context, canvasHeight, canvasWidth) {
    this.canvasHeight = canvasHeight;
    this.canvasWidth = canvasWidth;
    this.context = context;
    this.gameLoop = this.gameLoop.bind(this);
    console.log('game ', checker)
  }

  drawBoard(context){
    for(let i = 0; i <= 700; i = i + 100) {
      context.moveTo(i, 0);
      context.lineTo(i, 700);
      context.strokeStyle = 'black';
      context.stroke();

      for (let j = 0; j <= 700; j = j + 100) {
        context.moveTo(0, j);
        context.lineTo(700, j);
        context.strokeStyle = 'black';
        context.stroke();
      }
    }
  }

  // moveChecker(keyCode, checker){
  //   if (keyCode === 32 || keyCode === 13) {
  //     console.log('SPACE/enter')
  //   } else if (keyCode === 39) {
  //     console.log('right')
  //     console.log(this.checker)
  //     // this.checker.x += 100;
  //   } else if (keyCode === 37) {
  //     console.log('left')
  //     // this.checker.x -= 100;
  //   } 
  //   return x
  // }
  
  gameLoop(context, x) {
    this.drawBoard(this.context)
    checker.draw(this.context, x)
    window.requestAnimationFrame(this.gameLoop);
  }
}

module.exports = Game;