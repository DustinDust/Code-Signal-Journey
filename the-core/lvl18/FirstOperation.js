const solution = (expr) => {
  let m = b = 0;
  for (const x of expr) {
    b += (x === '(' ? 1 : 0);
    b -= (x === ')' ? 1 : 0);
    m = Math.max(m, b);
  }

  const enumExpr = expr.split('').map((val, index) => {
    return {
      val: val, index: index,
    };
  });

  for (const op of '*+') {
    for (const {val, index} of enumExpr) {
      b += (val === '(' ? 1 : 0);
      b -= (val === ')' ? 1 : 0);
      if (b === m && val === op) return index;
    }
  }
};

const expr = '((2 + 2) * 2) * 3 + (2 + (2 * 2))';
console.log(solution(expr));
