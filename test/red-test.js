const chai = require('chai');
const assert = chai.assert;

const Red = require('../lib/Red.js')
global.canvas = {
  width: 700,
  height: 700
}

describe('Red', function () {
  it('should be red', () => {
    let red = new Red();
    assert.equal(red.color, 'red')
  })

  it('checker should not move off board to left', () => {
    let red = new Red(50, 50)
    red.selectCol()
    assert.equal(red.x, 50)
      // red.x -= 100; move left min 50
  })

   it('checker should not move off board to right', () => {
    let red = new Red(650, 50)
    red.selectCol()
    assert.equal(red.x, 650)
      // red.x += 100; move right max 650
  })
});