const Board = require('./Board.js')
const Red = require('./Red.js')
const Blue = require('./Blue.js')

class Game {
  constructor (context, canvasHeight, canvasWidth) {
    this.canvasHeight = canvasHeight
    this.canvasWidth = canvasWidth
    this.context = context
    this.gameLoop = this.gameLoop.bind(this)
    this.red = new Red(context);
    this.gameBoard = new Board();
    // this.black = new Black(context);
    this.moveRed = this.moveRed.bind(this);
  }

  static drawBoard (context) {
    for (let i = 0; i <= 700; i = i + 100) {
      context.strokeStyle = 'black'
      context.lineWidth = 2
      context.moveTo(i, 0)
      context.lineTo(i, 700)
      context.stroke()

      for (let j = 0; j <= 700; j = j + 100) {
        context.moveTo(0, j)
        context.lineTo(700, j)
        context.strokeStyle = 'black'
        context.stroke()
      }
    }
  }

  moveRed(key) {
    this.red.selectCol(key, this.gameBoard);
  }

  gameLoop () {
    this.context.clearRect(0, 0, 700, 700)
    Game.drawBoard(this.context)
    // call move Red
    if (this.gameBoard.status[0][3] === null) {
      this.red.draw();
    } else {
      this.gameBoard.status[0][3] = 'red';
    }
    window.requestAnimationFrame(this.gameLoop)
  }
}

module.exports = Game