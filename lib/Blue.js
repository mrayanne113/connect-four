class Blue {
  constructor ( x = 350, y = 50) {
    this.x = x;
    this.y = y;
    this.color = 'blue';
  }

  draw (context) {
    context.beginPath();
    context.arc(this.x, this.y, 40, 0, Math.PI * 2);
    context.fillStyle = 'blue';
    context.fill();
  }

  selectCol (key, game) {
    if (key === 37 && game.blue.x > 50) {
      game.blue.x -= 100;
    } else if (key === 39 && game.blue.x < 650) {
      game.blue.x += 100;
    } else if (key === 13 || key === 32) {
      let gridCoordinates = game.gameBoard.updateBoard(this.x, 'blue');
      let row = gridCoordinates[1];
      let column = gridCoordinates[0];
      let tempArr = [];

      this.y = (row * 100) + 50;
      tempArr.push(this.x, this.y, 'blue');
      game.checkersOnBoard.push(tempArr);
      game.playerRed = true;
      game.switchPlayer('red', column, row);
    }
  }
}

module.exports = Blue;