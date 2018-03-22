const chai = require('chai');
const assert = chai.assert;

const Board = require('../lib/Board.js');

describe('Board', function () {
  it('Check if checker in row starts at 1', () => {
    let board = new Board();
    assert.equal(board.checkersInRow, 1)
  })

  it('check that this win is false to start with', () => {
    let board = new Board();
    assert.equal(board.win, false)
  })

  it('Check if Board.status is updating red if red checker', () => {
    let board = new Board();
    board.status[6][3] = 'red'
    assert.equal(board.status[6][3], 'red')
  })

  it('Check if Board.status is updating blue if red checker', () => {
    let board = new Board();
    board.status[6][2] = 'blue'
    assert.equal(board.status[6][2], 'blue')
  })

  it('should switch players in function checkVerticalWin', () => {
    let board = new Board();
    console.log(board.checkVerticalWin(player))
  })
});