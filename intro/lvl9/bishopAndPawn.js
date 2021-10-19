const bishopAndPawn = (bishop, pawn) => {
  const bishopPos = bishop.split('').map((value) => value.charCodeAt(0));
  const pawnPos = pawn.split('').map(((value) => value.charCodeAt(0)));
};

console.log(bishopAndPawn('a1', 'c3'));
