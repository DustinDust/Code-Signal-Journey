const solution = (a, q) => {
  const getSum = (a, q) => {
    let res = 0;
    for (const range of q) {
      for (let i = range[0]; i <= range[1]; i++) {
        res += a[i];
      }
    }
    return res;
  };

  let res = 0;
  const permute = (arr, m = []) => {
    // base case
    // should the length be 0, meaning that there's no more item to fit into the
    // current permutation. Or the current permutation is currently finished
    if (arr.length === 0) {
      // evaluate the permutation then push the answer (true/false) unto result
      const temp = getSum(m, q);
      res = Math.max(temp, res);
    } else {
      // actual backtracking
      for (let i = 0; i < arr.length; i++) {
        // make a copy of current array, so when done with one permutation
        // we dont have to revert the change
        const curr= arr.slice();

        // choose next item from current arr. Removes it (on the copy)
        const next = curr.splice(i, 1);
        permute(curr.slice(), m.concat(next));
      }
    }
  };
  permute(a);
  return res;
};

const a = [9, 7, 2, 4, 4];
const q = [[1, 3], [1, 4], [0, 2]];
console.log(solution(a, q));
