var chai = require('chai')
var assert = chai.assert
// const Board = require('../lib/Board.js')

var Game = require('../lib/Game.js')

describe('Game', function () {
  it('Only have 42 Pieces on board', function () {
    let game = new Game()
    // let tempGameBoard = [
    //   [null, null, null, null, null, 'red', null],
    //   ['red', 'red', 'red', 'red', 'red', 'red', 'red'],
    //   ['red', 'red', 'red', 'red', 'red', 'red', 'red'],
    //   ['red', 'red', 'red', 'red', 'red', 'red', 'red'],
    //   ['red', 'red', 'red', 'red', 'red', 'red', 'red'],
    //   ['red', 'red', 'red', 'red', 'red', 'red', 'red'],
    //   ['red', 'red', 'red', 'red', 'red', 'red', 'red']
    // ]
    // let flattened = tempGameBoard.reduce(
    //   function (accumulator, currentValue) {
    //     return accumulator.concat(currentValue)
    //   },
    //   []
    // )
    //
    // function isNotNull (value) {
    //   return value !== null
    // }
    //
    // let filtered = flattened.filter(isNotNull)
    for (let i = 0; i <= 41; i++) {
      game.checkersOnBoard.push(i);
    }
    assert.equal(game.checkersOnBoard.length, 42)

  })

  it.skip('Only have 21 red Pieces on board', function () {

  })

  it.skip('Only have 21 blue Pieces on board', function () {

  })

  it.skip('Only 6 checkers in a column', function () {

  })

  it.skip('Only 7 checkers in a row', function () {

  })
})

// Test if there is a winner
// Only have 42 pieces on the board
// Prevent droping a checker if column is full
// Restart the game

// Selector Checker can not move off the board.