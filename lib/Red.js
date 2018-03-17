const Game = require('./Game.js')

class Red {
  constructor (context, x = 350, y = 50) {
    this.context = context
    this.x = x
    this.y = y
  }

  draw () {
    this.context.beginPath()
    this.context.arc(this.x, this.y, 40, 0, Math.PI * 2)
    this.context.strokeStyle = 'red'
    this.context.fillStyle = 'red'
    this.context.fill()
  }
}

module.exports = Red