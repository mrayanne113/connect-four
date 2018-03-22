const chai = require('chai');
const assert = chai.assert;

const Blue = require('../lib/Blue.js')
global.canvas = {
  width: 700,
  height: 700
}

describe('Blue', function () {
  it('checker should not move off board', () => {
    let blue = new Blue()
    console.log(blue.x)
    // blue.selectCol(key, this)
      // blue.x -= 100; move left min 50
      // blue.x += 100; move right max 650
  })
});