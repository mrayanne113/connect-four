const Board = require('./Board.js')
const Game = require('./Game.js')

class Red {
  constructor (context, x = 350, y = 50) {
    this.context = context
    this.x = x
    this.y = y
    this.color = 'red'
    // console.log('Red context: ', context)
  }

  draw (x = 350, y = 50) {
    // console.log('Red x: ' + x)
    // console.log('Red y: ' + y)
    this.context.beginPath()
    this.context.arc(this.x, this.y, 40, 0, Math.PI * 2)
    this.context.fillStyle = 'red'
    this.context.fill()
  }

  selectCol (key, game) {
    if (key === 37) {
      console.log(game.red)

      game.red.x -= 100
    } else if (key === 39) {
      game.red.x += 100
    } else if (key === 13) {
      let row = game.gameBoard.updateBoard(this.x)

      this.y = (row * 100) + 50

      game.playerRed = false

      let tempArr = []

      tempArr.push(this.x, this.y, this.color)
      game.checkersOnBoard.push(tempArr)
      console.log(game.red)
      game.switchPlayer('blue')

    }
  }
}

module.exports = Red