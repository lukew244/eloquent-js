
var board = '';
var size = 8;
var squares = '# ';

createBoard();

function createBoard() {
  for (var i = 0; i < (size); i++) {
    var row = '';
    for (var j = 0; j < (size/2); j++) {
      row += squares;
    }
    board = board + row + '\n';
    squares == '# ' ? squares = ' #' : squares = '# ';
  }
}

console.log(board);
