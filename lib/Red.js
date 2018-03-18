const Board = require('./Board.js')
const Game = require('./Game.js')

class Red {
  constructor (context, x = 350, y = 50) {
    this.context = context
    this.x = x
    this.y = y
  }

  draw (x, y) {
    this.context.beginPath()
    this.context.arc(this.x, this.y, 40, 0, Math.PI * 2)
    this.context.strokeStyle = 'red'
    this.context.fillStyle = 'red'
    this.context.fill()
  }

  selectCol (key, gameBoard) {
    if (key === 37) {
      this.x -= 100
    } else if (key === 39) {
      this.x += 100
    } else if (key === 13) {
      // if (this.x === 50) {
      //   // gameBoard.status[1][0] = 'red';
      //   gameBoard.status[1][0] = 'red';
      // }
      gameBoard.updateBoard(this.x);
      this.y += 600;
    }
  }

}


module.exports = Red