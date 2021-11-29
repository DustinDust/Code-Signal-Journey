const solution = (a, q) => {
  const obj = new Array(11);
  for (const range of q) {
    for (let i = range[0]; i <= range[1]; i++) {
      obj[i] = (obj[i] || 0) + 1;
    }
  }
  const range = obj.filter((val) => val !== 0).map((val, index) => {
    return {freq: val, index: index};
  });
  range.sort((a, b) => b.freq - a.freq);
  a.sort((a, b) => b - a);
  console.log(a, range);
  let res = 0;
  for (let i = 0; i < range.length; i++) {
    res += a[i] * range[i].freq;
  }
  return res;
};

const a = [9, 7, 2, 4, 4];
const q = [[1, 3], [1, 4], [0, 2]];
console.log(solution(a, q));
