const solution = (a) => {
  const findDiff = (num) => {
    const digits = num.toString().split('');
    digits.sort((a, b) => a - b);
    return digits[digits.length - 1] - digits[0];
  };
  a = a.map((val, index) => {
    return {val: val, index: index};
  });
  a.sort((i, j) => {
    const diff = findDiff(i.val) - findDiff(j.val);
    return diff !== 0 ? diff : j.index - i.index;
  });
  return a.map((val) => val.val);
};

console.log(solution([152, 23, 7, 887, 243]));
