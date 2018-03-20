const Game = require('./Game.js')
const Red = require('./Red.js')
const Blue = require('./Blue.js')

class Board {
  constructor () {
    this.status = [
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null]
    ]
  }

  updateBoard (col) {
    let column = this.updateCol(col)
    let row = this.updateRow(column)
    return row;
  }

  updateCol (col) {
    // switch statement??
    if (col === 50) {
      return 0
    } else if (col === 150) {
      return 1
    } else if (col === 250) {
      return 2
    } else if (col === 350) {
      return 3
    } else if (col === 450) {
      return 4
    } else if (col === 550) {
      return 5
    } else {
      return 6
    }
  }

  updateRow (column) {
    for (let i = 6; i >= 1; i--) {
      if (this.status[i][column] === null) {
        this.status[i][column] = 'red'
        return i;
      }
    }
  }
  
}

module.exports = Board