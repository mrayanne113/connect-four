var chai = require('chai');
var assert = chai.assert;
// const Board = require('../lib/Board.js')

var Game = require('../lib/Game.js');

describe('Game', function () {
  // 7 arrays with 7 rows
  // defualt params
  // default methods
  //

  it('Only have 42 Pieces on board', function () {
    let game = new Game();

    for (let i = 0; i <= 41; i++) {
      game.red.selectCol(0)
    }
    assert.equal(game.checkersOnBoard.length, 42);

  });

  it.skip('Only have 21 red pieces on board', function () {

  });

  it.skip('Only have 21 blue pieces on board', function () {

  });

  it.skip('Only 6 checkers in a column', function () {

  });

  it.skip('Only 7 checkers in a row', function () {

  });
});

// Test if there is a winner
// Only have 42 pieces on the board
// Prevent droping a checker if column is full
// Restart the game

// Selector Checker can not move off the board.