const chai = require('chai')
const assert = chai.assert

const Game = require('../lib/Game.js')

describe('Game', function () {
  it('Only have 42 Pieces on board', () => {
    let game = new Game()
  
    for (let i = 0; i <= 41; i++) {
      game.checkersOnBoard.push(i);
    }
    assert.equal(game.checkersOnBoard.length, 42)

  })

  it.skip('Only 6 checkers in a column then restart the game', () => {

  })

  it.skip('Only 7 checkers in a row and then restart the game', () => {

  })

  it.skip('have a winner', () => {

  })
});
