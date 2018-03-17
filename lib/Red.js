const Board = require('./Board.js')

class Red {
  constructor (context, x = 350, y = 50) {
    this.context = context
    this.x = x
    this.y = y
  }

  draw (x, y) {
    this.context.beginPath()
    this.context.arc(this.x, this.y, 40, 0, Math.PI * 2)
    this.context.strokeStyle = 'red'
    this.context.fillStyle = 'red'
    this.context.fill()
  }

  selectCol (key) {
    if (key === 37) {
      this.x -= 100
    } else if (key === 39) {
      this.x += 100
    } else if (key === 13) {
      this.dropChecker()
    }
  }

  dropChecker() {
    this.y += 600;
  }

}


module.exports = Red