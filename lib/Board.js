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
    this.win = () => alert('Winner');
  }

  updateBoard (col, color) {
    let column = this.updateCol(col);
    let row = this.updateRow(column, color);
    this.checkIfWin(column, row, color);
    return row;
  }

  checkIfWin (column, row, color) {
    this.checkHorizontalWin();
    this.checkVerticalWin(column);
  }

  checkVerticalWin (column) {
    let tempArr = [];

    for (let i = 1; i < 7; i++) {
      let checkersInRow = 1;

      if (this.status[i][column] !== null) {
        tempArr.push(this.status[i][column]);
        let redResult = tempArr.reduce((redCounter, value) => {
          if (value === 'red') {
            return redCounter + 1;
          }
        }, 0);

        let blueResult = tempArr.reduce((blueCounter, value) => {
          if (value === 'blue') {
            return blueCounter + 1;
          }
        }, 0);

        if (blueResult === 4 || redResult === 4) {
          this.win()
        }
      }
    }
  }

  checkHorizontalWin () {
    for (let i = 1; i < 7; i++) {
      let checkersInRow = 1;

      for (let j = 0; j < 7; j++) {
        if (this.status[i][j] === this.status[i][j + 1] && this.status[i][j + 1] !== null) {
          checkersInRow++;
        } else {
          checkersInRow = 1;
        }
        if (checkersInRow === 4) {
          this.win();
        }
      }
    }
  }

  updateCol (col) {
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