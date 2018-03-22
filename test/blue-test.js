const chai = require('chai');
const assert = chai.assert;

const Blue = require('../lib/Blue.js')
global.canvas = {
  width: 700,
  height: 700
}

describe('Blue', function () {
  it('should be blue', () => {
    let blue = new Blue();
    assert.equal(blue.color, 'blue')
  })

  it('checker should not move off board to left', () => {
    let blue = new Blue(50, 50)
    blue.selectCol()
    assert.equal(blue.x, 50)
      // blue.x -= 100; move left min 50
  })

   it('checker should not move off board to right', () => {
    let blue = new Blue(650, 50)
    blue.selectCol()
    assert.equal(blue.x, 650)
      // blue.x += 100; move right max 650
  })
});