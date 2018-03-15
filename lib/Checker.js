const Game = require('./Game.js');

class Checker {
  constructor(context, x, y) {
    this.context = context;
    this.x = 0;
    this.y = 0;
  }

  draw(context, x=350) {
    let y = 50;
    context.beginPath();
    context.arc(x, y, 40, 0, Math.PI * 2);
    // this.context.strokeStyle = 'red';
    context.fillStyle = 'red';
    context.fill()
  }

  moveChecker(keyCode, checker){
    if (keyCode === 32 || keyCode === 13) {
      console.log('SPACE/enter')
    } else if (keyCode === 39) {
      // console.log('right')
      // console.log(this.checker)
      checker.draw(context, 450);
    } else if (keyCode === 37) {
      console.log('left')
      // this.checker.x -= 100;
    } 
  }
 }

module.exports = Checker;