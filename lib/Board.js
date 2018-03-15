class Board {
  construtor() {

  }

  drawBoard() {
    for(let i = 0; i <= 700; i = i + 100) {
      context.moveTo(i, 0);
      context.lineTo(i, 700);
      context.stroke();
      for (let j = 0; j <= 700; j = j + 100) {
        context.moveTo(0, j);
        context.lineTo(700, j);
        context.stroke();
      }
    }
  }
}

// let grid = {
//   row1: {
//     square1: {
//       occupied: false,
//       piece: null //player1 or player2
//     },
//     square2: {},
//     square3: {},
//     square4: {},
//     square5: {},
//     square6: {},
//     square7: {}
//   },
//   row2: {
//     square1: {},
//     square2: {},
//     square3: {},
//     square4: {},
//     square5: {},
//     square6: {},
//     square7: {}
//   },
//   row3: {
//     square1: {},
//     square2: {},
//     square3: {},
//     square4: {},
//     square5: {},
//     square6: {},
//     square7: {}
//   },
//   row4: {
//     square1: {},
//     square2: {},
//     square3: {},
//     square4: {},
//     square5: {},
//     square6: {},
//     square7: {}
//   },
//   row5: {
//     square1: {},
//     square2: {},
//     square3: {},
//     square4: {},
//     square5: {},
//     square6: {},
//     square7: {}
//   },
//   row6: {
//     square1: {},
//     square2: {},
//     square3: {},
//     square4: {},
//     square5: {},
//     square6: {},
//     square7: {}
//   }
// };

