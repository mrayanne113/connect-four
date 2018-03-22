class Red {
  constructor (x = 350, y = 50) {
    this.x = x;
    this.y = y;
    this.color = 'red';
  }

  draw (context) {
    context.beginPath();
    context.arc(this.x, this.y, 40, 0, Math.PI * 2);
    context.fillStyle = 'red';
    context.fill();
  }

  selectCol (key, game) {
    if (key === 37 && game.red.x > 50) {
      game.red.x -= 100;
    } else if (key === 39 && game.red.x < 650) {
      game.red.x += 100;
    } else if (key === 13 || key === 32) {
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