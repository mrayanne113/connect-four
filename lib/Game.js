const Board = require('./Board.js')
const Red = require('./Red.js')
const Blue = require('./Blue.js')

class Game {
  constructor (context, canvasHeight, canvasWidth) {
    this.canvasHeight = canvasHeight
    this.canvasWidth = canvasWidth
    this.context = context
    this.gameLoop = this.gameLoop.bind(this)
    this.red = new Red(context)
    this.blue = new Blue(context)
    this.gameBoard = new Board()
    this.counter = 0;
    this.playerRed = true;
    this.checkersOnBoard = [];
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

  drawPieces () {
    // loop through the nested array
      // if find red piece
      // this.red.draw(x, y)

    this.checkersOnBoard.forEach(function (item) {
      this.context.beginPath()
      this.context.arc(item[0], item[1], 40, 0, Math.PI * 2)
      this.context.strokeStyle = item[3];
      this.context.fillStyle = item[3];
      this.context.fill()
    }.bind(this))
  }

  moveRed (key) {
    if (this.playerRed) {
      this.red.selectCol(key, this)
    } else {
      this.blue.selectCol(key, this)
    }
  }

  switchPlayer (player) {
    if (player) {
      this.red.draw()
    } else {
      this.blue.draw()
    }
  }

  gameLoop () {
    this.context.clearRect(0, 0, 700, 700)
    Game.drawBoard(this.context)
    // loop through the nested array of game.status and draw all checkers.
    this.drawPieces();

    if (this.gameBoard.status[0][3] === null) {
      if (this.playerRed) {
        this.red.draw()
      } else {
        this.blue.draw()
      }
    } else {
      this.gameBoard.status[0][3] = 'red'
    }
    window.requestAnimationFrame(this.gameLoop)
  }
}



module.exports = Game