function solution(tree) {
  let m = (b = 0);
  for (const x of tree) {
    b += x === '(' ? 1 : 0;
    b -= x === ')' ? 1 : 0;
    m = Math.max(m, b);
  }
  let res = [];

  for (let i = 0; i < tree.length; i++) {
    b += tree[i] === '(' ? 1 : 0;
    b -= tree[i] === ')' ? 1 : 0;
    if (b === m - 1) {
      let temp = '';
      while (/[0-9]/.test(tree[i])) {
        temp+= tree[i];
        i++;
      }
      if (temp != '') {
        res.push(parseInt(temp));
      }
    };
  }
  return res;
}

let x = solution(
    '(2 (7 (2 () ()) (6 (5 () ()) (11 () ()))) (5 () (9 (4 () ()) ())))'
);
console.log(x);
