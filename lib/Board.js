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

    return [column, row];
  }

  downRight (column, row) {
    let checkersInRow = 1;

    if (column <= 3 && row <= 5) {
      console.log('column: ', column, 'row: ', row);
      console.log('downRight Called');
      console.log('down and to the right: ', this.status[row + 1][column + 1]);
      if (this.status[row + 1][column + 1] === this.status[row][column] &&
        this.status[row + 1][column + 1] !== null) {
        console.log('found equal checker down and to the right');
        checkersInRow++;
        console.log(checkersInRow);
        if (checkersInRow === 4) {
          this.win = true;
        }
      }
    }
  }

  checkDiagonalWin (column, row, color) {
    // let tempArr = [];
    // let checkersInRow = 1;

    // if (column <= 3) {
    //   console.log('up and to the right: ', this.status[row - 1][column + 1]);
    //   if (this.status[row - 1][column + 1] === this.status[row][column] &&
    //       this.status[row - 1][column + 1] !== null) {
    //     console.log('found equal checker to the upper right')
    //   }
    // }
    //
    // if (column >= 3) {
    //   console.log('up and to the left: ', this.status[row - 1][column - 1]);
    //   if (this.status[row - 1][column - 1 ] === this.status[row][column] &&
    //     this.status[row - 1][column - 1] !== null) {
    //     console.log('found equal checker to the upper left')
    //   }
    // }

    // if (column >= 3 && row <= 3) {
    //   console.log('down and to the left: ', this.status[row + 1][column - 1]);
    //   if (this.status[row + 1][column - 1 ] === this.status[row][column] &&
    //     this.status[row + 1][column - 1] !== null) {
    //     console.log('found equal checker down and to the left')
    //   }
    // }

    // this.downRight(column, row);
  }


  checkVerticalWin (column, player) {
    if (player === 'red') {
      player = 'blue'
    } else {
      player = 'red'
    }
    let tempArr = [];
    for (let i = 1; i < 7; i++) {
      if (this.status[i][column] !== null) {
        tempArr.push(this.status[i][column]);
        let result = tempArr.reduce((counter, value) => {
          if (value === player) {
            return counter + 1;
          }
        }, 0);
        console.log(result);
        if (result === 4) {
          this.win = true;
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
          this.win = true;
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