class Red {
  constructor (context, x = 350, y = 50) {
    this.context = context;
    this.x = x;
    this.y = y;
    this.color = 'red';
  }

  draw (x = 350, y = 50) {
    this.context.beginPath();
    this.context.arc(this.x, this.y, 40, 0, Math.PI * 2);
    this.context.fillStyle = 'red';
    this.context.fill();
  }

  selectCol (key, game) {
    if (key === 37) {
      game.red.x -= 100;
    } else if (key === 39) {
      game.red.x += 100;
    } else if (key === 13) {
      let gridCoordinates = game.gameBoard.updateBoard(this.x, 'red');
      let row = gridCoordinates[1];
      let column = gridCoordinates[0];
      let tempArr = [];

      this.y = (row * 100) + 50;
      tempArr.push(this.x, this.y, 'red');
      game.checkersOnBoard.push(tempArr);
      game.playerRed = false;
      game.switchPlayer('blue', column, row);
    }
  }
}

module.exports = Red;