const circleOfNumbers = (n, firstNumber) => {
  let moveLeft = firstNumber;
  let moveRight = firstNumber;
  do {
    moveLeft--;
    if (moveLeft < 0) {
      moveLeft = n-1;
    }
    moveRight++;
    if (moveRight >= n) {
      moveRight = 0;
    }
  } while (moveLeft !== moveRight);
  return moveLeft;
};

const bestPractics = (n, firstNumber) => {
  return (firstNumber + n/2) % n;
};


bestPractics(10, 2);
circleOfNumbers(10, 2);
