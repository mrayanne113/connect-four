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
    this.counter = 0
    this.playerRed = true
    this.checkersOnBoard = []
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
    this.checkersOnBoard.forEach(function (item) {
      this.context.beginPath()
      this.context.arc(item[0], item[1], 40, 0, Math.PI * 2)
      this.context.fillStyle = item[2]
      this.context.fill()
    }.bind(this))
  }

  moveRed (key) {
    if (this.playerRed) {
      console.log('move Red this:', this)
      this.red.selectCol(key, this)
    } else {
      this.blue.selectCol(key, this)
    }
  }

  switchPlayer (player) {
    // console.log(this.context)
    if (player === 'red') {
      let newRedChecker = new Red(this.context)

      // console.log('x: ' + newRedChecker.x)
      // console.log('y: ' + newRedChecker.y)

      newRedChecker.draw()

    } else if (player === 'blue') {
      let newBlueChecker = new Blue(this.context)

      // console.log('x: ' + newBlueChecker.x)
      // console.log('y: ' + newBlueChecker.y)

      newBlueChecker.draw()
    }
  }

  gameLoop () {
    this.context.clearRect(0, 0, 700, 700)
    Game.drawBoard(this.context)
    this.drawPieces()

    if (this.playerRed) {
      this.red.draw()
    } else {
      this.blue.draw()
    }
    window.requestAnimationFrame(this.gameLoop)
  }
}

module.exports = Game