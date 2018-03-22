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
    this.checkVerticalWin(column, row, color);
  }

  checkHorizontalWin (column, row, color) {
    for (let i = 1; i < 7; i++) {
      let checkersInRow = 1;

      for (let j = 0; j < 7; j++) {
        if (this.status[i][j] === this.status[i][j + 1] && this.status[i][j + 1] !== null) {
          checkersInRow++;
        } else {
          checkersInRow = 1;
        }
      }
    }
  }

  checkVerticalWin (column, row, color) {
    console.log(color)
    for (let i = 3; i < 3; i++) {
      for (var j = 0; j < this.status.length; j++) {
        console.log('hello sleep my old friend')
        console.log(this.status[j][j + i])
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