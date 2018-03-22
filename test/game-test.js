const chai = require('chai')
const assert = chai.assert

const Game = require('../lib/Game.js')

describe('Game', function () {
  it('Only have 42 Pieces on board', () => {
    let game = new Game();
  
    for (let i = 0; i <= 41; i++) {
      game.checkersOnBoard.push(i);
    }
    assert.equal(game.checkersOnBoard.length, 42)
  })

  it('should start out as playerRed equals true', () => {
    let game = new Game();

    assert.equal(game.playerRed, true)
  })

  it('should not have more than 21 red checkers', () => {
    let game = new Game();

    for (let i = 0; i < 21; i++){
      game.checkersOnBoard.push('red')
    }

    assert.isAtMost(game.checkersOnBoard.length, 21)
  })

  it('should not have more than 21 blue checkers', () => {
    let game = new Game();

    for (let i = 0; i < 21; i++){
      game.checkersOnBoard.push('blue')
    }

    assert.isAtMost(game.checkersOnBoard.length, 21)
  })

  // how would you test for this???
  // it('have a winner', () => {
  //   let game = new Game();

  //   game.gameBoard.win = true;
  //   assert.equal(game.gameLoop, alert('Winner'))
  // })
});
