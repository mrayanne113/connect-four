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
    this.checkersInRow = 1;
  }

  updateBoard (col, color) {
    let column = this.updateCol(col);
    let row = this.updateRow(column, color);

    return [column, row];
  }

  // downRight (column, row) {
  //   if (column <= 3 && row <= 5) {
  //     if (this.status[row + 1][column + 1] === this.status[row][column] &&
  //       this.status[row + 1][column + 1] !== null) {
  //       this.checkersInRow++;
  //       if (this.checkersInRow >= 5) {
  //         this.win = true;
  //       } else {
  //         this.downRight(column, row);
  //       }
  //     }
  //   }
  // }
  //
  // downLeft (column, row) {
  //   if (column >= 3 && row <= 3) {
  //     if (this.status[row + 1][column - 1] === this.status[row][column] &&
  //       this.status[row + 1][column - 1] !== null) {
  //       this.checkersInRow++;
  //       if (this.checkersInRow >= 5) {
  //         this.win = true;
  //       } else {
  //         this.downLeft(column, row);
  //       }
  //     }
  //   }
  // }
  //
  // upperRight (column, row) {
  //   if (column <= 3 && row <= 6 && row >= 4) {
  //     console.log('Upper Right called');
  //     console.log('row: ', row, 'column: ', column);
  //     if (this.status[row - 1][column + 1] === this.status[row][column] &&
  //       this.status[row - 1][column + 1] !== null) {
  //       this.checkersInRow++;
  //       console.log('upper right checker:', this.status[row - 1][column + 1]);
  //       console.log('Checkers in row', this.checkersInRow);
  //       if (this.checkersInRow >= 5) {
  //         this.win = true;
  //       } else {
  //         this.upperRight(column, row);
  //       }
  //     }
  //   }
  // }
  //
  // upperLeft (column, row) {
  //   console.log('Upper Left called');
  //   if (column >= 3 && row <= 6 && row >= 3) {
  //     if (this.status[row - 1][column - 1] === this.status[row][column] &&
  //       this.status[row - 1][column - 1] !== null) {
  //       this.checkersInRow++;
  //       console.log('this checkers in row: ', this.checkersInRow);
  //       if (this.checkersInRow >= 5) {
  //         this.win = true;
  //       } else {
  //         this.upperLeft(column, row);
  //       }
  //     }
  //   }
  // }

  upperLeftdownRight (column, row) {
    let color = this.status[row][column];
    console.log('row: ', row, 'column ', column);
    let tempArr = [color];
    let tempArr2 = [];

    if (column >= 3 && row >= 2) {
      let tempRow = row;

      for (let i = column; i > 0; i--) {
        tempRow--;
        // if (this.status[tempRow][i - 1] === null || this.status[tempRow][i - 1] !== color) {
        //   tempArr.push('');
        // }
        if (tempRow > 1) {
          console.log('testing row: ', tempRow, 'testing column ', i - 1);

          console.log(this.status[tempRow][i - 1]);
          if (this.status[tempRow][i - 1] === color) {
            tempArr.push(this.status[tempRow][i - 1]);
          }
        }
      }
    }

    if (column >= 1 && row >= 2) {
      let tempRow = row;

      for (let j = column; j < 6; j++) {
        tempRow++;

        if (tempRow <= 6 && tempRow > 1) {
          // if (this.status[tempRow][j + 1] === null || this.status[tempRow][j + 1] !== color) {
          //   tempArr2.push('');
          // }
          console.log('testing row: ', tempRow, 'testing column ', j - 1);

          if (this.status[tempRow][j + 1] === color) {
            tempArr2.push(this.status[tempRow][j + 1]);
          }
        }
      }
    }

    console.log('tempArr:', tempArr);
    console.log('tempArr2:', tempArr2);

    let finalArr = tempArr.concat(tempArr2);
    let numOfCheckers = 0;

    console.log(finalArr);

    for (let a = 0; a < finalArr.length; a++) {
      console.log(numOfCheckers)

      if (finalArr[a] === color) {
        numOfCheckers++;
        if (numOfCheckers >= 4) {

          this.win = true;
        }
      }
    }
  }

  // whatever column you in you go up and the the left that the column

  checkDiagonalWin (column, row, color) {
    this.upperLeftdownRight(column, row);

    // this.upperLeft(column, row);
    // this.upperRight(column, row);
    // this.downLeft(column, row);
    // this.downRight(column, row);
  }


  checkVerticalWin (column, player) {
    if (player === 'red') {
      player = 'blue';
    } else {
      player = 'red';
    }
    let tempArr = [];
    for (let i = 1; i < 7; i++) {
      if (this.status[i][column] !== null) {
        tempArr.push(this.status[i][column]);
        let result = tempArr.reduce((counter, value) => {
          if (value === player) {
            return counter += 1;
          }
        }, 0);
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