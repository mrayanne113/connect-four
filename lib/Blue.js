const Board = require('./Board.js')
const Game = require('./Game.js')

class Blue {
  constructor (context, x = 350, y = 50) {
    this.context = context
    this.x = x
    this.y = y
  }

  draw (x, y) {
    this.context.beginPath()
    this.context.arc(this.x, this.y, 40, 0, Math.PI * 2)
    this.context.strokeStyle = 'blue'
    this.context.fillStyle = 'blue'
    this.context.fill()
  }

  selectCol (key, gameBoard) {
    if (key === 37) {
      this.x -= 100
    } else if (key === 39) {
      this.x += 100
    } else if (key === 13) {
      let row = gameBoard.updateBoard(this.x);

      this.y = (row * 100) +  50;
    }
    game.switchPlayer('blue');
  }
}


module.exports = Blue