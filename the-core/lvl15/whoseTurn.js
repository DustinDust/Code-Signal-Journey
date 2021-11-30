// If both coords are even or odd, we have a black square
// If one of the two coords is even, the other is odd, we have white square
// Knights can only jump to an opposite colored square.
// We start as our knights are at 2 white and 2 black square.
// Which means black squares == white squares. This is white's turn
// So when we have even number of odd coords, white's turn
// when we have odd number of odd coords, black turn
const solution = (p) => {
  return (
    p
        .split(';')
        .reduce((ans, pos) => ans + pos.charCodeAt(0) + pos.charCodeAt(1), 0) %
      2 ===
    0
  );
};

solution('b1;g1;b8;g8');
