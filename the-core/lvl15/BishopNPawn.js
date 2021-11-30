const solution = (bishop, pawn) => {
  const bishopLocation = bishop.split('').map((val) => val.charCodeAt(0));
  const pawnLocation = pawn.split('').map((val) => val.charCodeAt(0));
  console.log(bishopLocation, pawnLocation);
  if (
    Math.abs(bishopLocation[0] - pawnLocation[0]) ===
    Math.abs(bishopLocation[1] - pawnLocation[1])
  ) {
    return true;
  } else return false;
};

console.log(solution('h1', 'h3'));
