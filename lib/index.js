let grid = {
  row1: {
    square1: {
      occupied: false,
      piece: null //player1 or player2
    },
    square2: {},
    square3: {},
    square4: {},
    square5: {},
    square6: {},
    square7: {}
  },
  row2: {
    square1: {},
    square2: {},
    square3: {},
    square4: {},
    square5: {},
    square6: {},
    square7: {}
  },
  row3: {
    square1: {},
    square2: {},
    square3: {},
    square4: {},
    square5: {},
    square6: {},
    square7: {}
  },
  row4: {
    square1: {},
    square2: {},
    square3: {},
    square4: {},
    square5: {},
    square6: {},
    square7: {}
  },
  row5: {
    square1: {},
    square2: {},
    square3: {},
    square4: {},
    square5: {},
    square6: {},
    square7: {}
  },
  row6: {
    square1: {},
    square2: {},
    square3: {},
    square4: {},
    square5: {},
    square6: {},
    square7: {}
  }
};


// color 4464d0
function drawGrid() {
  var canvas = document.getElementById('grid');
  var context = canvas.getContext('2d');

  context.strokeStyle = 'black';
  context.lineWidth = 2;

  var x = 100;
  var y = 100;

  for (var i = 0; i <= 700; i + 100) {
    for (var j = 0; j <= 600; i + 100 ) {

    }
  }
}

drawGrid();