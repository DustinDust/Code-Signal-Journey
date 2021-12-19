/*
 * idea: we will fill the board with attack sign and invalid sign first
 * We then traverse the whole board to check each position
 */
function solution(king, amazon) {
  // make an empty board;
  let board = [0, 0, 0, 0, 0, 0, 0, 0].map((x) => [0, 0, 0, 0, 0, 0, 0, 0]);
  // result
  let results = [0, 0, 0, 0];

  // fill the board with 1 at place amazon can attack
  attackedSquares(board, amazon, king);

  // fill the board with -1 at place which is invalid to move there since the king is around that
  invalidSquares(board, king);

  let queenC = getCoordinates(amazon);
  board.forEach((x, ix) => {
    x.forEach((y, iy) => {
      if (y !== -1 && !(queenC[1] === ix && queenC[0] === iy)) {
        let valid = checkValidMove(ix, iy, board);
        if (y === 1 && !valid) results[0]++;
        if (y === 1 && valid) results[1]++;
        if (y === 0 && !valid) {
          console.log(ix, iy);
          results[2]++;
        }
        if (y === 0 && valid) results[3]++;
      }
    });
  });

  return results;
}

// get a coordinates
function getCoordinates(piece) {
  return [piece.charCodeAt(piece[0]) - 97, Number(piece[1]) - 1];
}

// fill the board with place that the amazon can attack (1)
function attackedSquares(board, amazon, king) {
  let coordinates = getCoordinates(amazon);
  let kingCoordinates = getCoordinates(king);
  let counter = coordinates[0] + 1;
  // the way amazon move knight-like
  if (coordinates[1] + 2 < 8) {
    if (coordinates[0] + 1 < 8) {
      board[coordinates[1] + 2][coordinates[0] + 1] = 1;
    }
    if (coordinates[0] - 1 >= 0) {
      board[coordinates[1] + 2][coordinates[0] - 1] = 1;
    }
  }

  if (coordinates[1] - 2 >= 0) {
    if (coordinates[0] + 1 < 8) {
      board[coordinates[1] - 2][coordinates[0] + 1] = 1;
    }
    if (coordinates[0] - 1 >= 0) {
      board[coordinates[1] - 2][coordinates[0] - 1] = 1;
    }
  }

  if (coordinates[0] + 2 < 8) {
    if (coordinates[1] + 1 < 8) {
      board[coordinates[1] + 1][coordinates[0] + 2] = 1;
    }
    if (coordinates[1] - 1 >= 0) {
      board[coordinates[1] - 1][coordinates[0] + 2] = 1;
    }
  }

  if (coordinates[0] - 2 >= 0) {
    if (coordinates[1] + 1 < 8) {
      board[coordinates[1] + 1][coordinates[0] - 2] = 1;
    }
    if (coordinates[1] - 1 >= 0) {
      board[coordinates[1] - 1][coordinates[0] - 2] = 1;
    }
  }

  // amazon move rook-like
  while (counter < 8) {
    if (counter === kingCoordinates[0] && coordinates[1] === kingCoordinates[1])
      break;
    board[coordinates[1]][counter] = 1;
    counter++;
  }
  counter = coordinates[0] - 1;
  while (counter >= 0) {
    if (counter === kingCoordinates[0] && coordinates[1] === kingCoordinates[1])
      break;
    board[coordinates[1]][counter] = 1;
    counter--;
  }
  counter = coordinates[1] + 1;
  while (counter < 8) {
    if (counter === kingCoordinates[1] && coordinates[0] === kingCoordinates[0])
      break;
    board[counter][coordinates[0]] = 1;
    counter++;
  }
  counter = coordinates[1] - 1;
  while (counter >= 0) {
    if (counter === kingCoordinates[1] && coordinates[0] === kingCoordinates[0])
      break;
    board[counter][coordinates[0]] = 1;
    counter--;
  }

  // amazone move bishop-like
  counter = coordinates[0] + 1;
  let counter1 = coordinates[1] + 1;
  while (counter < 8 && counter1 < 8) {
    if (counter === kingCoordinates[0] && counter1 === kingCoordinates[1])
      break;
    board[counter1][counter] = 1;
    counter++;
    counter1++;
  }

  counter = coordinates[0] + 1;
  counter1 = coordinates[1] - 1;
  while (counter < 8 && counter1 >= 0) {
    if (counter === kingCoordinates[0] && counter1 === kingCoordinates[1])
      break;
    board[counter1][counter] = 1;
    counter++;
    counter1--;
  }

  counter = coordinates[0] - 1;
  counter1 = coordinates[1] - 1;
  while (counter >= 0 && counter1 >= 0) {
    if (counter === kingCoordinates[0] && counter1 === kingCoordinates[1])
      break;
    board[counter1][counter] = 1;
    counter--;
    counter1--;
  }

  counter = coordinates[0] - 1;
  counter1 = coordinates[1] + 1;
  while (counter >= 0 && counter1 < 8) {
    if (counter === kingCoordinates[0] && counter1 === kingCoordinates[1])
      break;
    board[counter1][counter] = 1;
    counter--;
    counter1++;
  }
}

function invalidSquares(board, king) {
  let coordinates = getCoordinates(king);
  board[coordinates[1]][coordinates[0]] = -1;
  if (coordinates[0] + 1 < 8) {
    board[coordinates[1]][coordinates[0] + 1] = -1;
    if (coordinates[1] + 1 < 8) {
      board[coordinates[1] + 1][coordinates[0] + 1] = -1;
    }
    if (coordinates[1] - 1 >= 0) {
      board[coordinates[1] - 1][coordinates[0] + 1] = -1;
    }
  }
  if (coordinates[0] - 1 >= 0) {
    board[coordinates[1]][coordinates[0] - 1] = -1;
    if (coordinates[1] + 1 < 8) {
      board[coordinates[1] + 1][coordinates[0] - 1] = -1;
    }
    if (coordinates[1] - 1 >= 0) {
      board[coordinates[1] - 1][coordinates[0] - 1] = -1;
    }
  }

  if (coordinates[1] + 1 < 8) {
    board[coordinates[1] + 1][coordinates[0]] = -1;
  }
  if (coordinates[1] - 1 >= 0) {
    board[coordinates[1] - 1][coordinates[0]] = -1;
  }
}

function checkValidMove(x, y, board) {
  if (y + 1 < 8) {
    if (board[x][y + 1] === 0) return true;
    if (x + 1 < 8) {
      if (board[x + 1][y + 1] === 0) return true;
    }
    if (x - 1 >= 0) {
      if (board[x - 1][y + 1] === 0) return true;
    }
  }
  if (y - 1 >= 0) {
    if (board[x][y - 1] === 0) return true;
    if (x + 1 < 8) {
      if (board[x + 1][y - 1] === 0) return true;
    }
    if (x - 1 >= 0) {
      if (board[x - 1][y - 1] === 0) return true;
    }
  }

  if (x + 1 < 8) {
    if (board[x + 1][y] === 0) return true;
  }
  if (x - 1 >= 0) {
    if (board[x - 1][y] === 0) return true;
  }
}
