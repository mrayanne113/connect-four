/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var Game = __webpack_require__(1);
	
	var canvas = document.getElementById('grid');
	var context = canvas.getContext('2d');
	var game = new Game(context, canvas.height, canvas.width);
	
	document.addEventListener('keydown', first);
	
	function first(e) {
	  if (e.keyCode === 52) {
	    document.removeEventListener('keydown', first);
	    game.gameLoop();
	    document.addEventListener('keydown', keyStateDown);
	  }
	}
	
	function keyStateDown(e) {
	  e.preventDefault();
	  game.moveChecker(e.keyCode);
	}
	
	context.font = '20px Arial';
	context.fillText('Press 4 to Start', canvas.width / 2 - 70, canvas.height / 2);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Board = __webpack_require__(2);
	var Red = __webpack_require__(3);
	var Blue = __webpack_require__(4);
	
	var Game = function () {
	  function Game(context, canvasHeight, canvasWidth) {
	    _classCallCheck(this, Game);
	
	    this.canvasHeight = canvasHeight;
	    this.canvasWidth = canvasWidth;
	    this.context = context;
	    this.gameLoop = this.gameLoop.bind(this);
	    this.red = new Red();
	    this.blue = new Blue();
	    this.gameBoard = new Board();
	    this.playerRed = true;
	    this.checkersOnBoard = [];
	    this.redScore = 0;
	    this.blueScore = 0;
	  }
	
	  _createClass(Game, [{
	    key: 'drawPieces',
	    value: function drawPieces() {
	      this.checkersOnBoard.forEach(function (item) {
	        this.context.beginPath();
	        this.context.arc(item[0], item[1], 40, 0, Math.PI * 2);
	        this.context.fillStyle = item[2];
	        this.context.fill();
	      }.bind(this));
	    }
	  }, {
	    key: 'checkMaxCheckers',
	    value: function checkMaxCheckers() {
	      if (this.checkersOnBoard.length === 42) {
	        this.gameBoard = new Board();
	        this.context.clearRect(0, 0, 700, 700);
	        this.checkersOnBoard = [];
	      }
	    }
	  }, {
	    key: 'moveChecker',
	    value: function moveChecker(key) {
	      if (this.playerRed) {
	        this.red.selectCol(key, this);
	      } else {
	        this.blue.selectCol(key, this);
	      }
	    }
	  }, {
	    key: 'switchPlayer',
	    value: function switchPlayer(player, column, row) {
	      this.gameBoard.checkHorizontalWin();
	      this.gameBoard.checkVerticalWin(column, player);
	      this.gameBoard.checkDiagonalWin(column, row, player);
	      if (player === 'red') {
	        this.red = new Red();
	        this.red.draw(this.context);
	      } else {
	        this.blue = new Blue();
	        this.blue.draw(this.context);
	      }
	      this.checkMaxCheckers();
	    }
	  }, {
	    key: 'updateScore',
	    value: function updateScore() {
	      document.getElementById('red-score').innerText = this.redScore;
	      document.getElementById('blue-score').innerText = this.blueScore;
	    }
	  }, {
	    key: 'gameLoop',
	    value: function gameLoop() {
	      this.context.clearRect(0, 0, 700, 700);
	      Game.drawBoard(this.context);
	      this.drawPieces();
	
	      if (this.playerRed) {
	        this.red.draw(this.context);
	      } else {
	        this.blue.draw(this.context);
	      }
	
	      if (this.gameBoard.win) {
	        var winnerColor = this.playerRed ? 'Blue' : 'Red';
	        if (winnerColor === 'Red') {
	          this.redScore++;
	        } else {
	          this.blueScore++;
	        }
	        document.getElementById('show-winner').innerText = winnerColor + ' Wins!!';
	        this.updateScore();
	        this.gameBoard = new Board();
	        this.context.clearRect(0, 0, 700, 700);
	        this.checkersOnBoard = [];
	        this.gameBoard.win = false;
	        window.requestAnimationFrame(this.gameLoop);
	      } else {
	        window.requestAnimationFrame(this.gameLoop);
	      }
	    }
	  }], [{
	    key: 'drawBoard',
	    value: function drawBoard(context) {
	      for (var i = 0; i <= 600; i = i + 100) {
	        context.strokeStyle = 'black';
	        context.lineWidth = 2;
	        context.moveTo(i, 100);
	        context.lineTo(i, 700);
	        context.stroke();
	
	        for (var j = 100; j <= 600; j = j + 100) {
	          context.moveTo(0, j);
	          context.lineTo(700, j);
	          context.strokeStyle = 'black';
	          context.stroke();
	        }
	      }
	    }
	  }]);
	
	  return Game;
	}();
	
	module.exports = Game;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Board = function () {
	  function Board() {
	    _classCallCheck(this, Board);
	
	    this.status = [[null, null, null, null, null, null, null], [null, null, null, null, null, null, null], [null, null, null, null, null, null, null], [null, null, null, null, null, null, null], [null, null, null, null, null, null, null], [null, null, null, null, null, null, null], [null, null, null, null, null, null, null]];
	    this.win = false;
	    this.checkersInRow = 1;
	  }
	
	  _createClass(Board, [{
	    key: 'updateBoard',
	    value: function updateBoard(col, color) {
	      var column = this.updateCol(col);
	      var row = this.updateRow(column, color);
	
	      return [column, row];
	    }
	  }, {
	    key: 'checkUpperLeftdownRight',
	    value: function checkUpperLeftdownRight(column, row) {
	      var color = this.status[row][column];
	      var tempArr = [color];
	      var tempArr2 = [];
	      if (column >= 3 && row >= 2) {
	        var tempRow = row;
	        for (var i = column; i > 0; i--) {
	          tempRow--;
	          if (tempRow > 1) {
	            if (this.status[tempRow][i - 1] === color) {
	              tempArr.push(this.status[tempRow][i - 1]);
	            }
	          }
	        }
	      }
	
	      if (column >= 1 && row >= 2) {
	        var _tempRow = row;
	        for (var j = column; j < 6; j++) {
	          _tempRow++;
	          if (_tempRow <= 6 && _tempRow > 1) {
	            if (this.status[_tempRow][j + 1] === color) {
	              tempArr2.push(this.status[_tempRow][j + 1]);
	            }
	          }
	        }
	      }
	      var finalArr = tempArr.concat(tempArr2);
	      var numOfCheckers = 0;
	      for (var a = 0; a < finalArr.length; a++) {
	        if (finalArr[a] === color) {
	          numOfCheckers++;
	          if (numOfCheckers >= 4) {
	            this.win = true;
	          }
	        }
	      }
	    }
	  }, {
	    key: 'checkUpperRightDownLeft',
	    value: function checkUpperRightDownLeft(column, row) {
	      var color = this.status[row][column];
	
	      var tempArr = [color];
	      var tempArr2 = [];
	
	      if (column <= 3 && row >= 2) {
	        var tempRow = row;
	
	        for (var i = column; i < 6; i++) {
	          tempRow--;
	
	          if (tempRow > 1 && this.status[tempRow][i + 1] === color) {
	            tempArr.push(this.status[tempRow][i + 1]);
	          }
	        }
	      }
	
	      if (column >= 1 && row >= 2) {
	        var _tempRow2 = row;
	
	        for (var j = column; j > 1; j--) {
	          _tempRow2++;
	          if (_tempRow2 <= 6 && _tempRow2 > 1) {
	
	            if (this.status[_tempRow2][j - 1] === color) {
	              tempArr2.push(this.status[_tempRow2][j - 1]);
	            }
	          }
	        }
	      }
	
	      var finalArr = tempArr.concat(tempArr2);
	      var numOfCheckers = 0;
	
	      for (var a = 0; a < finalArr.length; a++) {
	
	        if (finalArr[a] === color) {
	          numOfCheckers++;
	          if (numOfCheckers >= 4) {
	
	            this.win = true;
	          }
	        }
	      }
	    }
	  }, {
	    key: 'checkDiagonalWin',
	    value: function checkDiagonalWin(column, row) {
	      this.checkUpperLeftdownRight(column, row);
	      this.checkUpperRightDownLeft(column, row);
	    }
	  }, {
	    key: 'checkVerticalWin',
	    value: function checkVerticalWin(column, player) {
	      player = player === 'red' ? 'blue' : 'red';
	      var tempArr = [];
	      for (var i = 1; i < 7; i++) {
	        if (this.status[i][column] !== null) {
	          tempArr.push(this.status[i][column]);
	          var result = tempArr.reduce(function (counter, value) {
	            if (value === player) {
	              return counter += 1;
	            }
	          }, 0);
	          if (result === 4) {
	            this.win = true;
	          }
	        }
	      }
	    }
	  }, {
	    key: 'checkHorizontalWin',
	    value: function checkHorizontalWin() {
	      for (var i = 1; i < 7; i++) {
	        var checkersInRow = 1;
	
	        for (var j = 0; j < 7; j++) {
	          if (this.status[i][j] === this.status[i][j + 1] && this.status[i][j + 1] !== null) {
	            checkersInRow++;
	          } else {
	            checkersInRow = 1;
	          }
	          if (checkersInRow === 4) {
	            this.win = true;
	          }
	        }
	      }
	    }
	  }, {
	    key: 'updateCol',
	    value: function updateCol(col) {
	      if (col === 50) {
	        return 0;
	      } else if (col === 150) {
	        return 1;
	      } else if (col === 250) {
	        return 2;
	      } else if (col === 350) {
	        return 3;
	      } else if (col === 450) {
	        return 4;
	      } else if (col === 550) {
	        return 5;
	      } else {
	        return 6;
	      }
	    }
	  }, {
	    key: 'updateRow',
	    value: function updateRow(column, color) {
	      for (var i = 6; i >= 1; i--) {
	        if (this.status[i][column] === null) {
	          this.status[i][column] = color;
	          return i;
	        }
	      }
	    }
	  }]);
	
	  return Board;
	}();
	
	module.exports = Board;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Red = function () {
	  function Red() {
	    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 350;
	    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 50;
	
	    _classCallCheck(this, Red);
	
	    this.x = x;
	    this.y = y;
	    this.color = 'red';
	  }
	
	  _createClass(Red, [{
	    key: 'draw',
	    value: function draw(context) {
	      context.beginPath();
	      context.arc(this.x, this.y, 40, 0, Math.PI * 2);
	      context.fillStyle = 'red';
	      context.fill();
	    }
	  }, {
	    key: 'selectCol',
	    value: function selectCol(key, game) {
	      if (key === 37 && game.red.x > 50) {
	        game.red.x -= 100;
	      } else if (key === 39 && game.red.x < 650) {
	        game.red.x += 100;
	      } else if (key === 13 || key === 32) {
	        var gridCoordinates = game.gameBoard.updateBoard(this.x, 'red');
	        var row = gridCoordinates[1];
	        var column = gridCoordinates[0];
	
	        var tempArr = [];
	
	        this.y = row * 100 + 50;
	        tempArr.push(this.x, this.y, 'red');
	        game.checkersOnBoard.push(tempArr);
	        game.playerRed = false;
	        game.switchPlayer('blue', column, row);
	      }
	    }
	  }]);
	
	  return Red;
	}();
	
	module.exports = Red;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Blue = function () {
	  function Blue() {
	    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 350;
	    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 50;
	
	    _classCallCheck(this, Blue);
	
	    this.x = x;
	    this.y = y;
	    this.color = 'blue';
	  }
	
	  _createClass(Blue, [{
	    key: 'draw',
	    value: function draw(context) {
	      context.beginPath();
	      context.arc(this.x, this.y, 40, 0, Math.PI * 2);
	      context.fillStyle = 'blue';
	      context.fill();
	    }
	  }, {
	    key: 'selectCol',
	    value: function selectCol(key, game) {
	      if (key === 37 && game.blue.x > 50) {
	        game.blue.x -= 100;
	      } else if (key === 39 && game.blue.x < 650) {
	        game.blue.x += 100;
	      } else if (key === 13 || key === 32) {
	        var gridCoordinates = game.gameBoard.updateBoard(this.x, 'blue');
	        var row = gridCoordinates[1];
	        var column = gridCoordinates[0];
	        var tempArr = [];
	
	        this.y = row * 100 + 50;
	        tempArr.push(this.x, this.y, 'blue');
	        game.checkersOnBoard.push(tempArr);
	        game.playerRed = true;
	        game.switchPlayer('red', column, row);
	      }
	    }
	  }]);
	
	  return Blue;
	}();
	
	module.exports = Blue;

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZDIxOWZkNjgxNDZkZTIyOTBmODEiLCJ3ZWJwYWNrOi8vLy4vbGliL2luZGV4LmpzIiwid2VicGFjazovLy8uL2xpYi9HYW1lLmpzIiwid2VicGFjazovLy8uL2xpYi9Cb2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9saWIvUmVkLmpzIiwid2VicGFjazovLy8uL2xpYi9CbHVlLmpzIl0sIm5hbWVzIjpbIkdhbWUiLCJyZXF1aXJlIiwiY2FudmFzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImNvbnRleHQiLCJnZXRDb250ZXh0IiwiZ2FtZSIsImhlaWdodCIsIndpZHRoIiwiYWRkRXZlbnRMaXN0ZW5lciIsImZpcnN0IiwiZSIsImtleUNvZGUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZ2FtZUxvb3AiLCJrZXlTdGF0ZURvd24iLCJwcmV2ZW50RGVmYXVsdCIsIm1vdmVDaGVja2VyIiwiZm9udCIsImZpbGxUZXh0IiwiQm9hcmQiLCJSZWQiLCJCbHVlIiwiY2FudmFzSGVpZ2h0IiwiY2FudmFzV2lkdGgiLCJiaW5kIiwicmVkIiwiYmx1ZSIsImdhbWVCb2FyZCIsInBsYXllclJlZCIsImNoZWNrZXJzT25Cb2FyZCIsInJlZFNjb3JlIiwiYmx1ZVNjb3JlIiwiZm9yRWFjaCIsIml0ZW0iLCJiZWdpblBhdGgiLCJhcmMiLCJNYXRoIiwiUEkiLCJmaWxsU3R5bGUiLCJmaWxsIiwibGVuZ3RoIiwiY2xlYXJSZWN0Iiwia2V5Iiwic2VsZWN0Q29sIiwicGxheWVyIiwiY29sdW1uIiwicm93IiwiY2hlY2tIb3Jpem9udGFsV2luIiwiY2hlY2tWZXJ0aWNhbFdpbiIsImNoZWNrRGlhZ29uYWxXaW4iLCJkcmF3IiwiY2hlY2tNYXhDaGVja2VycyIsImlubmVyVGV4dCIsImRyYXdCb2FyZCIsImRyYXdQaWVjZXMiLCJ3aW4iLCJ3aW5uZXJDb2xvciIsInVwZGF0ZVNjb3JlIiwid2luZG93IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiaSIsInN0cm9rZVN0eWxlIiwibGluZVdpZHRoIiwibW92ZVRvIiwibGluZVRvIiwic3Ryb2tlIiwiaiIsIm1vZHVsZSIsImV4cG9ydHMiLCJzdGF0dXMiLCJjaGVja2Vyc0luUm93IiwiY29sIiwiY29sb3IiLCJ1cGRhdGVDb2wiLCJ1cGRhdGVSb3ciLCJ0ZW1wQXJyIiwidGVtcEFycjIiLCJ0ZW1wUm93IiwicHVzaCIsImZpbmFsQXJyIiwiY29uY2F0IiwibnVtT2ZDaGVja2VycyIsImEiLCJjaGVja1VwcGVyTGVmdGRvd25SaWdodCIsImNoZWNrVXBwZXJSaWdodERvd25MZWZ0IiwicmVzdWx0IiwicmVkdWNlIiwiY291bnRlciIsInZhbHVlIiwieCIsInkiLCJncmlkQ29vcmRpbmF0ZXMiLCJ1cGRhdGVCb2FyZCIsInN3aXRjaFBsYXllciJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7OztBQ3RDQSxLQUFNQSxPQUFPLG1CQUFBQyxDQUFRLENBQVIsQ0FBYjs7QUFFQSxLQUFNQyxTQUFTQyxTQUFTQyxjQUFULENBQXdCLE1BQXhCLENBQWY7QUFDQSxLQUFNQyxVQUFVSCxPQUFPSSxVQUFQLENBQWtCLElBQWxCLENBQWhCO0FBQ0EsS0FBSUMsT0FBTyxJQUFJUCxJQUFKLENBQVNLLE9BQVQsRUFBa0JILE9BQU9NLE1BQXpCLEVBQWlDTixPQUFPTyxLQUF4QyxDQUFYOztBQUVBTixVQUFTTyxnQkFBVCxDQUEwQixTQUExQixFQUFxQ0MsS0FBckM7O0FBRUEsVUFBU0EsS0FBVCxDQUFnQkMsQ0FBaEIsRUFBbUI7QUFDakIsT0FBSUEsRUFBRUMsT0FBRixLQUFjLEVBQWxCLEVBQXNCO0FBQ3BCVixjQUFT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TUFBcEI7QUFDQW5DLGVBQVFvQyxJQUFSO0FBQ0Q7OzsrQkFFVUcsRyxFQUFLckMsSSxFQUFNO0FBQ3BCLFdBQUlxQyxRQUFRLEVBQVIsSUFBY3JDLEtBQUtxQixJQUFMLENBQVUrRCxDQUFWLEdBQWMsRUFBaEMsRUFBb0M7QUFDbENwRixjQUFLcUIsSUFBTCxDQUFVK0QsQ0FBVixJQUFlLEdBQWY7QUFDRCxRQUZELE1BRU8sSUFBSS9DLFFBQVEsRUFBUixJQUFjckMsS0FBS3FCLElBQUwsQ0FBVStELENBQVYsR0FBYyxHQUFoQyxFQUFxQztBQUMxQ3BGLGNBQUtxQixJQUFMLENBQVUrRCxDQUFWLElBQWUsR0FBZjtBQUNELFFBRk0sTUFFQSxJQUFJL0MsUUFBUSxFQUFSLElBQWNBLFFBQVEsRUFBMUIsRUFBOEI7QUFDbkMsYUFBSWlELGtCQUFrQnRGLEtBQUtzQixTQUFMLENBQWVpRSxXQUFmLENBQTJCLEtBQUtILENBQWhDLEVBQW1DLE1BQW5DLENBQXRCO0FBQ0EsYUFBSTNDLE1BQU02QyxnQkFBZ0IsQ0FBaEIsQ0FBVjtBQUNBLGFBQUk5QyxTQUFTOEMsZ0JBQWdCLENBQWhCLENBQWI7QUFDQSxhQUFJaEIsVUFBVSxFQUFkOztBQUVBLGNBQUtlLENBQUwsR0FBVTVDLE1BQU0sR0FBUCxHQUFjLEVBQXZCO0FBQ0E2QixpQkFBUUcsSUFBUixDQUFhLEtBQUtXLENBQWxCLEVBQXFCLEtBQUtDLENBQTFCLEVBQTZCLE1BQTdCO0FBQ0FyRixjQUFLd0IsZUFBTCxDQUFxQmlELElBQXJCLENBQTBCSCxPQUExQjtBQUNBdEUsY0FBS3VCLFNBQUwsR0FBaUIsSUFBakI7QUFDQXZCLGNBQUt3RixZQUFMLENBQWtCLEtBQWxCLEVBQXlCaEQsTUFBekIsRUFBaUNDLEdBQWpDO0FBQ0Q7QUFDRjs7Ozs7O0FBR0hxQixRQUFPQyxPQUFQLEdBQWlCL0MsSUFBakIsQyIsImZpbGUiOiJtYWluLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGQyMTlmZDY4MTQ2ZGUyMjkwZjgxIiwiY29uc3QgR2FtZSA9IHJlcXVpcmUoJy4vR2FtZS5qcycpO1xuXG5jb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ3JpZCcpO1xuY29uc3QgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xubGV0IGdhbWUgPSBuZXcgR2FtZShjb250ZXh0LCBjYW52YXMuaGVpZ2h0LCBjYW52YXMud2lkdGgpO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZmlyc3QpO1xuXG5mdW5jdGlvbiBmaXJzdCAoZSkge1xuICBpZiAoZS5rZXlDb2RlID09PSA1Mikge1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBmaXJzdCk7XG4gICAgZ2FtZS5nYW1lTG9vcCgpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBrZXlTdGF0ZURvd24pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGtleVN0YXRlRG93biAoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIGdhbWUubW92ZUNoZWNrZXIoZS5rZXlDb2RlKTtcbn1cblxuY29udGV4dC5mb250ID0gJzIwcHggQXJpYWwnO1xuY29udGV4dC5maWxsVGV4dCgnUHJlc3MgNCB0byBTdGFydCcsIGNhbnZhcy53aWR0aCAvIDIgLSA3MCwgY2FudmFzLmhlaWdodCAvIDIpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2xpYi9pbmRleC5qcyIsImNvbnN0IEJvYXJkID0gcmVxdWlyZSgnLi9Cb2FyZC5qcycpO1xuY29uc3QgUmVkID0gcmVxdWlyZSgnLi9SZWQuanMnKTtcbmNvbnN0IEJsdWUgPSByZXF1aXJlKCcuL0JsdWUuanMnKTtcblxuY2xhc3MgR2FtZSB7XG4gIGNvbnN0cnVjdG9yIChjb250ZXh0LCBjYW52YXNIZWlnaHQsIGNhbnZhc1dpZHRoKSB7XG4gICAgdGhpcy5jYW52YXNIZWlnaHQgPSBjYW52YXNIZWlnaHQ7XG4gICAgdGhpcy5jYW52YXNXaWR0aCA9IGNhbnZhc1dpZHRoO1xuICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgdGhpcy5nYW1lTG9vcCA9IHRoaXMuZ2FtZUxvb3AuYmluZCh0aGlzKTtcbiAgICB0aGlzLnJlZCA9IG5ldyBSZWQoKTtcbiAgICB0aGlzLmJsdWUgPSBuZXcgQmx1ZSgpO1xuICAgIHRoaXMuZ2FtZUJvYXJkID0gbmV3IEJvYXJkKCk7XG4gICAgdGhpcy5wbGF5ZXJSZWQgPSB0cnVlO1xuICAgIHRoaXMuY2hlY2tlcnNPbkJvYXJkID0gW107XG4gICAgdGhpcy5yZWRTY29yZSA9IDA7XG4gICAgdGhpcy5ibHVlU2NvcmUgPSAwO1xuICB9XG5cbiAgc3RhdGljIGRyYXdCb2FyZCAoY29udGV4dCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IDYwMDsgaSA9IGkgKyAxMDApIHtcbiAgICAgIGNvbnRleHQuc3Ryb2tlU3R5bGUgPSAnYmxhY2snO1xuICAgICAgY29udGV4dC5saW5lV2lkdGggPSAyO1xuICAgICAgY29udGV4dC5tb3ZlVG8oaSwgMTAwKTtcbiAgICAgIGNvbnRleHQubGluZVRvKGksIDcwMCk7XG4gICAgICBjb250ZXh0LnN0cm9rZSgpO1xuXG4gICAgICBmb3IgKGxldCBqID0gMTAwOyBqIDw9IDYwMDsgaiA9IGogKyAxMDApIHtcbiAgICAgICAgY29udGV4dC5tb3ZlVG8oMCwgaik7XG4gICAgICAgIGNvbnRleHQubGluZVRvKDcwMCwgaik7XG4gICAgICAgIGNvbnRleHQuc3Ryb2tlU3R5bGUgPSAnYmxhY2snO1xuICAgICAgICBjb250ZXh0LnN0cm9rZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGRyYXdQaWVjZXMgKCkge1xuICAgIHRoaXMuY2hlY2tlcnNPbkJvYXJkLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHRoaXMuY29udGV4dC5iZWdpblBhdGgoKTtcbiAgICAgIHRoaXMuY29udGV4dC5hcmMoaXRlbVswXSwgaXRlbVsxXSwgNDAsIDAsIE1hdGguUEkgKiAyKTtcbiAgICAgIHRoaXMuY29udGV4dC5maWxsU3R5bGUgPSBpdGVtWzJdO1xuICAgICAgdGhpcy5jb250ZXh0LmZpbGwoKTtcbiAgICB9LmJpbmQodGhpcykpO1xuICB9XG5cbiAgY2hlY2tNYXhDaGVja2VycyAoKSB7XG4gICAgaWYgKHRoaXMuY2hlY2tlcnNPbkJvYXJkLmxlbmd0aCA9PT0gNDIpIHtcbiAgICAgIHRoaXMuZ2FtZUJvYXJkID0gbmV3IEJvYXJkKCk7XG4gICAgICB0aGlzLmNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIDcwMCwgNzAwKTtcbiAgICAgIHRoaXMuY2hlY2tlcnNPbkJvYXJkID0gW107XG4gICAgfVxuICB9XG5cbiAgbW92ZUNoZWNrZXIgKGtleSkge1xuICAgIGlmICh0aGlzLnBsYXllclJlZCkge1xuICAgICAgdGhpcy5yZWQuc2VsZWN0Q29sKGtleSwgdGhpcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYmx1ZS5zZWxlY3RDb2woa2V5LCB0aGlzKTtcbiAgICB9XG4gIH1cblxuICBzd2l0Y2hQbGF5ZXIgKHBsYXllciwgY29sdW1uLCByb3cpIHtcbiAgICB0aGlzLmdhbWVCb2FyZC5jaGVja0hvcml6b250YWxXaW4oKTtcbiAgICB0aGlzLmdhbWVCb2FyZC5jaGVja1ZlcnRpY2FsV2luKGNvbHVtbiwgcGxheWVyKTtcbiAgICB0aGlzLmdhbWVCb2FyZC5jaGVja0RpYWdvbmFsV2luKGNvbHVtbiwgcm93LCBwbGF5ZXIpO1xuICAgIGlmIChwbGF5ZXIgPT09ICdyZWQnKSB7XG4gICAgICB0aGlzLnJlZCA9IG5ldyBSZWQoKTtcbiAgICAgIHRoaXMucmVkLmRyYXcodGhpcy5jb250ZXh0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5ibHVlID0gbmV3IEJsdWUoKTtcbiAgICAgIHRoaXMuYmx1ZS5kcmF3KHRoaXMuY29udGV4dCk7XG4gICAgfVxuICAgIHRoaXMuY2hlY2tNYXhDaGVja2VycygpO1xuICB9XG5cbiAgdXBkYXRlU2NvcmUgKCkge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWQtc2NvcmUnKS5pbm5lclRleHQgPSB0aGlzLnJlZFNjb3JlO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdibHVlLXNjb3JlJykuaW5uZXJUZXh0ID0gdGhpcy5ibHVlU2NvcmU7XG4gIH1cblxuICBnYW1lTG9vcCAoKSB7XG4gICAgdGhpcy5jb250ZXh0LmNsZWFyUmVjdCgwLCAwLCA3MDAsIDcwMCk7XG4gICAgR2FtZS5kcmF3Qm9hcmQodGhpcy5jb250ZXh0KTtcbiAgICB0aGlzLmRyYXdQaWVjZXMoKTtcblxuICAgIGlmICh0aGlzLnBsYXllclJlZCkge1xuICAgICAgdGhpcy5yZWQuZHJhdyh0aGlzLmNvbnRleHQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmJsdWUuZHJhdyh0aGlzLmNvbnRleHQpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmdhbWVCb2FyZC53aW4pIHtcbiAgICAgIGxldCB3aW5uZXJDb2xvciA9IHRoaXMucGxheWVyUmVkID8gJ0JsdWUnIDogJ1JlZCc7XG4gICAgICBpZiAod2lubmVyQ29sb3IgPT09ICdSZWQnKSB7XG4gICAgICAgIHRoaXMucmVkU2NvcmUrKztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuYmx1ZVNjb3JlKys7XG4gICAgICB9XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2hvdy13aW5uZXInKS5pbm5lclRleHQgPSB3aW5uZXJDb2xvciArICcgV2lucyEhJ1xuICAgICAgdGhpcy51cGRhdGVTY29yZSgpO1xuICAgICAgdGhpcy5nYW1lQm9hcmQgPSBuZXcgQm9hcmQoKTtcbiAgICAgIHRoaXMuY29udGV4dC5jbGVhclJlY3QoMCwgMCwgNzAwLCA3MDApO1xuICAgICAgdGhpcy5jaGVja2Vyc09uQm9hcmQgPSBbXTtcbiAgICAgIHRoaXMuZ2FtZUJvYXJkLndpbiA9IGZhbHNlO1xuICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmdhbWVMb29wKTtcbiAgICB9IGVsc2Uge1xuICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmdhbWVMb29wKTtcbiAgICB9XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBHYW1lO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2xpYi9HYW1lLmpzIiwiY2xhc3MgQm9hcmQge1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgdGhpcy5zdGF0dXMgPSBbXG4gICAgICBbbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbF0sXG4gICAgICBbbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbF0sXG4gICAgICBbbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbF0sXG4gICAgICBbbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbF0sXG4gICAgICBbbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbF0sXG4gICAgICBbbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbF0sXG4gICAgICBbbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbF1cbiAgICBdO1xuICAgIHRoaXMud2luID0gZmFsc2U7XG4gICAgdGhpcy5jaGVja2Vyc0luUm93ID0gMTtcbiAgfVxuXG4gIHVwZGF0ZUJvYXJkIChjb2wsIGNvbG9yKSB7XG4gICAgbGV0IGNvbHVtbiA9IHRoaXMudXBkYXRlQ29sKGNvbCk7XG4gICAgbGV0IHJvdyA9IHRoaXMudXBkYXRlUm93KGNvbHVtbiwgY29sb3IpO1xuXG4gICAgcmV0dXJuIFtjb2x1bW4sIHJvd107XG4gIH1cblxuXG4gIGNoZWNrVXBwZXJMZWZ0ZG93blJpZ2h0IChjb2x1bW4sIHJvdykge1xuICAgIGxldCBjb2xvciA9IHRoaXMuc3RhdHVzW3Jvd11bY29sdW1uXTtcbiAgICBsZXQgdGVtcEFyciA9IFtjb2xvcl07XG4gICAgbGV0IHRlbXBBcnIyID0gW107XG4gICAgaWYgKGNvbHVtbiA+PSAzICYmIHJvdyA+PSAyKSB7XG4gICAgICBsZXQgdGVtcFJvdyA9IHJvdztcbiAgICAgIGZvciAobGV0IGkgPSBjb2x1bW47IGkgPiAwOyBpLS0pIHtcbiAgICAgICAgdGVtcFJvdy0tO1xuICAgICAgICBpZiAodGVtcFJvdyA+IDEpIHtcbiAgICAgICAgICBpZiAodGhpcy5zdGF0dXNbdGVtcFJvd11baSAtIDFdID09PSBjb2xvcikge1xuICAgICAgICAgICAgdGVtcEFyci5wdXNoKHRoaXMuc3RhdHVzW3RlbXBSb3ddW2kgLSAxXSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGNvbHVtbiA+PSAxICYmIHJvdyA+PSAyKSB7XG4gICAgICBsZXQgdGVtcFJvdyA9IHJvdztcbiAgICAgIGZvciAobGV0IGogPSBjb2x1bW47IGogPCA2OyBqKyspIHtcbiAgICAgICAgdGVtcFJvdysrO1xuICAgICAgICBpZiAodGVtcFJvdyA8PSA2ICYmIHRlbXBSb3cgPiAxKSB7XG4gICAgICAgICAgaWYgKHRoaXMuc3RhdHVzW3RlbXBSb3ddW2ogKyAxXSA9PT0gY29sb3IpIHtcbiAgICAgICAgICAgIHRlbXBBcnIyLnB1c2godGhpcy5zdGF0dXNbdGVtcFJvd11baiArIDFdKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgbGV0IGZpbmFsQXJyID0gdGVtcEFyci5jb25jYXQodGVtcEFycjIpO1xuICAgIGxldCBudW1PZkNoZWNrZXJzID0gMDtcbiAgICBmb3IgKGxldCBhID0gMDsgYSA8IGZpbmFsQXJyLmxlbmd0aDsgYSsrKSB7XG4gICAgICBpZiAoZmluYWxBcnJbYV0gPT09IGNvbG9yKSB7XG4gICAgICAgIG51bU9mQ2hlY2tlcnMrKztcbiAgICAgICAgaWYgKG51bU9mQ2hlY2tlcnMgPj0gNCkge1xuICAgICAgICAgIHRoaXMud2luID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNoZWNrVXBwZXJSaWdodERvd25MZWZ0IChjb2x1bW4sIHJvdykge1xuICAgIGxldCBjb2xvciA9IHRoaXMuc3RhdHVzW3Jvd11bY29sdW1uXTtcblxuICAgIGxldCB0ZW1wQXJyID0gW2NvbG9yXTtcbiAgICBsZXQgdGVtcEFycjIgPSBbXTtcblxuICAgIGlmIChjb2x1bW4gPD0gMyAmJiByb3cgPj0gMikge1xuICAgICAgbGV0IHRlbXBSb3cgPSByb3c7XG5cbiAgICAgIGZvciAobGV0IGkgPSBjb2x1bW47IGkgPCA2OyBpKyspIHtcbiAgICAgICAgdGVtcFJvdy0tO1xuXG4gICAgICAgIGlmICh0ZW1wUm93ID4gMSAmJiB0aGlzLnN0YXR1c1t0ZW1wUm93XVtpICsgMV0gPT09IGNvbG9yKSB7XG4gICAgICAgICAgdGVtcEFyci5wdXNoKHRoaXMuc3RhdHVzW3RlbXBSb3ddW2kgKyAxXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoY29sdW1uID49IDEgJiYgcm93ID49IDIpIHtcbiAgICAgIGxldCB0ZW1wUm93ID0gcm93O1xuXG4gICAgICBmb3IgKGxldCBqID0gY29sdW1uOyBqID4gMTsgai0tKSB7XG4gICAgICAgIHRlbXBSb3crKztcbiAgICAgICAgaWYgKHRlbXBSb3cgPD0gNiAmJiB0ZW1wUm93ID4gMSkge1xuXG4gICAgICAgICAgaWYgKHRoaXMuc3RhdHVzW3RlbXBSb3ddW2ogLSAxXSA9PT0gY29sb3IpIHtcbiAgICAgICAgICAgIHRlbXBBcnIyLnB1c2godGhpcy5zdGF0dXNbdGVtcFJvd11baiAtIDFdKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgZmluYWxBcnIgPSB0ZW1wQXJyLmNvbmNhdCh0ZW1wQXJyMik7XG4gICAgbGV0IG51bU9mQ2hlY2tlcnMgPSAwO1xuXG4gICAgZm9yIChsZXQgYSA9IDA7IGEgPCBmaW5hbEFyci5sZW5ndGg7IGErKykge1xuXG4gICAgICBpZiAoZmluYWxBcnJbYV0gPT09IGNvbG9yKSB7XG4gICAgICAgIG51bU9mQ2hlY2tlcnMrKztcbiAgICAgICAgaWYgKG51bU9mQ2hlY2tlcnMgPj0gNCkge1xuXG4gICAgICAgICAgdGhpcy53aW4gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gIH1cblxuICBjaGVja0RpYWdvbmFsV2luIChjb2x1bW4sIHJvdykge1xuICAgIHRoaXMuY2hlY2tVcHBlckxlZnRkb3duUmlnaHQoY29sdW1uLCByb3cpO1xuICAgIHRoaXMuY2hlY2tVcHBlclJpZ2h0RG93bkxlZnQoY29sdW1uLCByb3cpO1xuICB9XG5cbiAgY2hlY2tWZXJ0aWNhbFdpbiAoY29sdW1uLCBwbGF5ZXIpIHtcbiAgICBwbGF5ZXIgPSBwbGF5ZXIgPT09ICdyZWQnID8gJ2JsdWUnIDogJ3JlZCc7XG4gICAgbGV0IHRlbXBBcnIgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IDc7IGkrKykge1xuICAgICAgaWYgKHRoaXMuc3RhdHVzW2ldW2NvbHVtbl0gIT09IG51bGwpIHtcbiAgICAgICAgdGVtcEFyci5wdXNoKHRoaXMuc3RhdHVzW2ldW2NvbHVtbl0pO1xuICAgICAgICBsZXQgcmVzdWx0ID0gdGVtcEFyci5yZWR1Y2UoKGNvdW50ZXIsIHZhbHVlKSA9PiB7XG4gICAgICAgICAgaWYgKHZhbHVlID09PSBwbGF5ZXIpIHtcbiAgICAgICAgICAgIHJldHVybiBjb3VudGVyICs9IDE7XG4gICAgICAgICAgfVxuICAgICAgICB9LCAwKTtcbiAgICAgICAgaWYgKHJlc3VsdCA9PT0gNCkge1xuICAgICAgICAgIHRoaXMud2luID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNoZWNrSG9yaXpvbnRhbFdpbiAoKSB7XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCA3OyBpKyspIHtcbiAgICAgIGxldCBjaGVja2Vyc0luUm93ID0gMTtcblxuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCA3OyBqKyspIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdHVzW2ldW2pdID09PSB0aGlzLnN0YXR1c1tpXVtqICsgMV0gJiYgdGhpcy5zdGF0dXNbaV1baiArIDFdICE9PSBudWxsKSB7XG4gICAgICAgICAgY2hlY2tlcnNJblJvdysrO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNoZWNrZXJzSW5Sb3cgPSAxO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGVja2Vyc0luUm93ID09PSA0KSB7XG4gICAgICAgICAgdGhpcy53aW4gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlQ29sIChjb2wpIHtcbiAgICBpZiAoY29sID09PSA1MCkge1xuICAgICAgcmV0dXJuIDA7XG4gICAgfSBlbHNlIGlmIChjb2wgPT09IDE1MCkge1xuICAgICAgcmV0dXJuIDE7XG4gICAgfSBlbHNlIGlmIChjb2wgPT09IDI1MCkge1xuICAgICAgcmV0dXJuIDI7XG4gICAgfSBlbHNlIGlmIChjb2wgPT09IDM1MCkge1xuICAgICAgcmV0dXJuIDM7XG4gICAgfSBlbHNlIGlmIChjb2wgPT09IDQ1MCkge1xuICAgICAgcmV0dXJuIDQ7XG4gICAgfSBlbHNlIGlmIChjb2wgPT09IDU1MCkge1xuICAgICAgcmV0dXJuIDU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiA2O1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZVJvdyAoY29sdW1uLCBjb2xvcikge1xuICAgIGZvciAobGV0IGkgPSA2OyBpID49IDE7IGktLSkge1xuICAgICAgaWYgKHRoaXMuc3RhdHVzW2ldW2NvbHVtbl0gPT09IG51bGwpIHtcbiAgICAgICAgdGhpcy5zdGF0dXNbaV1bY29sdW1uXSA9IGNvbG9yO1xuICAgICAgICByZXR1cm4gaTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEJvYXJkO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2xpYi9Cb2FyZC5qcyIsImNsYXNzIFJlZCB7XG4gIGNvbnN0cnVjdG9yICh4ID0gMzUwLCB5ID0gNTApIHtcbiAgICB0aGlzLnggPSB4O1xuICAgIHRoaXMueSA9IHk7XG4gICAgdGhpcy5jb2xvciA9ICdyZWQnO1xuICB9XG5cbiAgZHJhdyAoY29udGV4dCkge1xuICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgY29udGV4dC5hcmModGhpcy54LCB0aGlzLnksIDQwLCAwLCBNYXRoLlBJICogMik7XG4gICAgY29udGV4dC5maWxsU3R5bGUgPSAncmVkJztcbiAgICBjb250ZXh0LmZpbGwoKTtcbiAgfVxuXG4gIHNlbGVjdENvbCAoa2V5LCBnYW1lKSB7XG4gICAgaWYgKGtleSA9PT0gMzcgJiYgZ2FtZS5yZWQueCA+IDUwKSB7XG4gICAgICBnYW1lLnJlZC54IC09IDEwMDtcbiAgICB9IGVsc2UgaWYgKGtleSA9PT0gMzkgJiYgZ2FtZS5yZWQueCA8IDY1MCkge1xuICAgICAgZ2FtZS5yZWQueCArPSAxMDA7XG4gICAgfSBlbHNlIGlmIChrZXkgPT09IDEzIHx8IGtleSA9PT0gMzIpIHtcbiAgICAgIGxldCBncmlkQ29vcmRpbmF0ZXMgPSBnYW1lLmdhbWVCb2FyZC51cGRhdGVCb2FyZCh0aGlzLngsICdyZWQnKTtcbiAgICAgIGxldCByb3cgPSBncmlkQ29vcmRpbmF0ZXNbMV07XG4gICAgICBsZXQgY29sdW1uID0gZ3JpZENvb3JkaW5hdGVzWzBdO1xuXG4gICAgICBsZXQgdGVtcEFyciA9IFtdO1xuXG4gICAgICB0aGlzLnkgPSAocm93ICogMTAwKSArIDUwO1xuICAgICAgdGVtcEFyci5wdXNoKHRoaXMueCwgdGhpcy55LCAncmVkJyk7XG4gICAgICBnYW1lLmNoZWNrZXJzT25Cb2FyZC5wdXNoKHRlbXBBcnIpO1xuICAgICAgZ2FtZS5wbGF5ZXJSZWQgPSBmYWxzZTtcbiAgICAgIGdhbWUuc3dpdGNoUGxheWVyKCdibHVlJywgY29sdW1uLCByb3cpO1xuICAgIH1cbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJlZDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvUmVkLmpzIiwiY2xhc3MgQmx1ZSB7XG4gIGNvbnN0cnVjdG9yICggeCA9IDM1MCwgeSA9IDUwKSB7XG4gICAgdGhpcy54ID0geDtcbiAgICB0aGlzLnkgPSB5O1xuICAgIHRoaXMuY29sb3IgPSAnYmx1ZSc7XG4gIH1cblxuICBkcmF3IChjb250ZXh0KSB7XG4gICAgY29udGV4dC5iZWdpblBhdGgoKTtcbiAgICBjb250ZXh0LmFyYyh0aGlzLngsIHRoaXMueSwgNDAsIDAsIE1hdGguUEkgKiAyKTtcbiAgICBjb250ZXh0LmZpbGxTdHlsZSA9ICdibHVlJztcbiAgICBjb250ZXh0LmZpbGwoKTtcbiAgfVxuXG4gIHNlbGVjdENvbCAoa2V5LCBnYW1lKSB7XG4gICAgaWYgKGtleSA9PT0gMzcgJiYgZ2FtZS5ibHVlLnggPiA1MCkge1xuICAgICAgZ2FtZS5ibHVlLnggLT0gMTAwO1xuICAgIH0gZWxzZSBpZiAoa2V5ID09PSAzOSAmJiBnYW1lLmJsdWUueCA8IDY1MCkge1xuICAgICAgZ2FtZS5ibHVlLnggKz0gMTAwO1xuICAgIH0gZWxzZSBpZiAoa2V5ID09PSAxMyB8fCBrZXkgPT09IDMyKSB7XG4gICAgICBsZXQgZ3JpZENvb3JkaW5hdGVzID0gZ2FtZS5nYW1lQm9hcmQudXBkYXRlQm9hcmQodGhpcy54LCAnYmx1ZScpO1xuICAgICAgbGV0IHJvdyA9IGdyaWRDb29yZGluYXRlc1sxXTtcbiAgICAgIGxldCBjb2x1bW4gPSBncmlkQ29vcmRpbmF0ZXNbMF07XG4gICAgICBsZXQgdGVtcEFyciA9IFtdO1xuXG4gICAgICB0aGlzLnkgPSAocm93ICogMTAwKSArIDUwO1xuICAgICAgdGVtcEFyci5wdXNoKHRoaXMueCwgdGhpcy55LCAnYmx1ZScpO1xuICAgICAgZ2FtZS5jaGVja2Vyc09uQm9hcmQucHVzaCh0ZW1wQXJyKTtcbiAgICAgIGdhbWUucGxheWVyUmVkID0gdHJ1ZTtcbiAgICAgIGdhbWUuc3dpdGNoUGxheWVyKCdyZWQnLCBjb2x1bW4sIHJvdyk7XG4gICAgfVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQmx1ZTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvQmx1ZS5qcyJdLCJzb3VyY2VSb290IjoiIn0=