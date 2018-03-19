const Board = require('./Board.js')
const Game = require('./Game.js')

class Blue {
  constructor (context, x = 350, y = 50) {
    this.context = context;
    this.x = x;
    this.y = y;
    this.color = 'blue';
  }

  draw (x = 350, y = 50) {
    // console.log('Blue x: ' + x)
    // console.log('Blue y: ' + y)
    this.context.beginPath()
    this.context.arc(this.x, this.y, 40, 0, Math.PI * 2)
    this.context.fillStyle = 'blue'
    this.context.fill()
  }

  selectCol (key, game) {
    if (key === 37) {
      console.log(game.blue)

      game.blue.x -= 100
    } else if (key === 39) {
      game.blue.x += 100
      console.log(game.blue)

    } else if (key === 13) {
      let row = game.gameBoard.updateBoard(this.x)

      this.y = (row * 100) + 50

      game.playerRed = true;

      let tempArr = [];

      tempArr.push(this.x, this.y, this.color)
      game.checkersOnBoard.push(tempArr)
      console.log(game.blue)
      game.switchPlayer('red')

    }
  }
}

module.exports = Blue