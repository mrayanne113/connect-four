const Board = require('./Board.js');
const Red = require('./Red.js');
const Blue = require('./Blue.js');

class Game {
  constructor (context, canvasHeight, canvasWidth) {
    this.canvasHeight = canvasHeight;
    this.canvasWidth = canvasWidth;
    this.context = context;
    this.gameLoop = this.gameLoop.bind(this);
    this.red = new Red(context);
    this.blue = new Blue(context);
    this.gameBoard = new Board();
    this.playerRed = true;
    this.checkersOnBoard = [];
    this.gameBoard.win = false;
  }

  static drawBoard (context) {
    for (let i = 0; i <= 600; i = i + 100) {
      context.strokeStyle = 'black';
      context.lineWidth = 2;
      context.moveTo(i, 100);
      context.lineTo(i, 700);
      context.stroke();

      for (let j = 0; j <= 700; j = j + 100) {
        context.moveTo(0, j);
        context.lineTo(700, j);
        context.strokeStyle = 'black';
        context.stroke();
      }
    }
  }

  drawPieces () {
    this.checkersOnBoard.forEach(function (item) {
      this.context.beginPath();
      this.context.arc(item[0], item[1], 40, 0, Math.PI * 2);
      this.context.fillStyle = item[2];
      this.context.fill();
    }.bind(this));
  }

  checkMaxCheckers () {
    if (this.checkersOnBoard.length === 42) {
      this.gameBoard = new Board();
      this.context.clearRect(0, 0, 700, 700);
      this.checkersOnBoard = [];
    }
  }

  moveChecker (key) {
    if (this.playerRed) {
      this.selectCol(key, 'red');
    } else {
      this.selectCol(key, 'blue');
    }
  }

  // selectCol (key, color) {
  //   if (key === 37) {
  //     this[color].x -= 100;
  //   } else if (key === 39) {
  //     this[color].x += 100;
  //   } else if (key === 13) {
  //     let row = this.gameBoard.updateBoard(this[color].x, color);
  //     let tempArr = [];
  //
  //     this.y = (row * 100) + 50;
  //     tempArr.push(row, this.y, color);
  //     this.checkersOnBoard.push(tempArr);
  //     console.log(this.checkersOnBoard);
  //     if (this.playerRed) {
  //       this.playerRed = false;
  //       this.switchPlayer('blue');
  //     } else if (!this.playerRed) {
  //       this.playerRed = true;
  //       this.switchPlayer('red');
  //     }
  //   }
  // }

  switchPlayer (player) {
    console.log('switch player');
    console.log(player);
    if (player === 'red') {
      this.red = new Red(this.context);
      this.red.draw();
    } else {
      this.blue = new Blue(this.context);
      this.blue.draw();
    }
  }

  gameLoop () {
    this.context.clearRect(0, 0, 700, 700);
    Game.drawBoard(this.context);
    this.drawPieces();

    if (this.playerRed) {
      this.red.draw();
    } else {
      this.blue.draw();
    }

    window.requestAnimationFrame(this.gameLoop);

    // if (!this.gameBoard.win) {
    //   window.requestAnimationFrame(this.gameLoop);
    // } else {
    //   // show win condition. even an alert
    // }
  }
}

module.exports = Game;