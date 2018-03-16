const Game = require('./Game.js');

class Checker {
  constructor(context, x=350, y=50) {
    this.context = context;
    this.x = x;
    this.y = y;
  }

  draw(context, x, y) {
    this.context.beginPath();
    this.context.arc(x, y, 40, 0, Math.PI * 2);
    // this.context.strokeStyle = 'red';
    this.context.fillStyle = 'red';
    this.context.fill()
  }

  moveLeft(){
    this.x -= 100;
  }

  moveRight(){
    this.x += 100;
  }
 }

module.exports = Checker;