const Game = require('./Game.js');

class Checker {
  constructor(context) {
    this.context = context;
  }

  draw() {
    let x = 350;
    let y = 50;
    this.context.beginPath();
    this.context.arc(x, y, 40, 0, Math.PI * 2);
    // this.context.fillStyle = 'red';
    this.context.fill()
  }
 }

module.exports = Checker;