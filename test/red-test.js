const chai = require('chai');
const assert = chai.assert;

const Red = require('../lib/Red.js')
global.canvas = {
  width: 700,
  height: 700
}

describe('Red', function () {
  it('checker should not move off board', () => {
    let red = new Red()
    console.log(red.x)
    // red.selectCol(key, this)
      // red.x -= 100; move left min 50
      // red.x += 100; move right max 650
  })
});