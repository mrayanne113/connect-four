const Game = require('./Game.js');
const Red = require('./Red.js');
const Blue = require('./Blue.js');

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
    ];
    this.win = false;
  }

  updateBoard (col, color) {
    let column = this.updateCol(col);
    let row = this.updateRow(column, color);

    this.checkIfWin(column, row, color);

    return row;
  }

  checkIfWin (column, row, color) {
    this.checkHorizontalWin(column, row, color);
  }

  checkHorizontalWin (column, row, color) {
    // checkRight
    // if slot to right is same color
    // increase checkersInRow ++
    // else
    // return

    for (let i = 1; i < 7; i++) {
      if (this.status[i]) {
        let checkersInRow = 0;
        for (let j = 0; j <= 7; j++) {
          if (this.status[j] === this.status[j + 1]) {
            checkersInRow++;
          } else {
            checkersInRow = 0;
          }
          this.win = true;
        }
      }
    }
  }

  updateCol (col) {
    // switch statement??
    if (col === 50) {
      return 0;
    } else if (col === 150) {
      return 1;
    } else if (col === 250) {
      return 2;
    } else if (col === 350) {
      return 3;
    } else if (col === 450) {
      return 4;
    } else if (col === 550) {
      return 5;
    } else {
      return 6;
    }
  }

  // FIX THIS RED BLUE
  updateRow (column, color) {
    for (let i = 6; i >= 1; i--) {
      if (this.status[i][column] === null) {
        this.status[i][column] = color;
        return i;
      }
    }
  }
}

module.exports = Board;