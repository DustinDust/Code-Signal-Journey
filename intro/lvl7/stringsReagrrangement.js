/**
  Idea of this: find all permutation available for the array. Evaluate each
  and push the result unto another array. If there is any 'true' indicating
  that the inputArray is a correct case
 */


const stringsRearrangement = (inputArray) => {
  const result = [];

  // this function backtrack through all the permuatiton
  const permute = (arr, m = []) => {
    // base case
    // should the length be 0, meaning that there's no more item to fit into the
    // current permutation. Or the current permutation is currently finished
    if (arr.length === 0) {
      // evaluate the permutation then push the answer (true/false) unto result
      result.push(evaluate(m));
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

  const evaluate = (array) => {
    let dif;
    for (let i = 1; i < array.length; i++) {
      dif = 1;
      const prev = array[i-1].split('');
      const curr = array[i].split('');
      for (let i = 0; i < prev.length; i++) {
        if (prev[i] !== curr[i]) dif--;
        if (dif < 0) return false;
      }
      if (dif === 1) return false;
    }
    return true;
  };

  permute(inputArray);

  return result.some((value) => value === true);
};

console.log(stringsRearrangement(['aba', 'bbb', 'bab']));
