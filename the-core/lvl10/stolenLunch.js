const solution = (note) => {
  let res = '';
  let back = {};
  let forward = {};
  '0123456789'.split('').forEach((val) => {
    back[val] = String.fromCharCode(parseInt(val) + 97);
    back[String.fromCharCode(parseInt(val) + 97)] = val;
  });
  console.log(back);
  for (let ch of note) {
    if (ch in back) {
      res += back[ch];
    } else if (ch in forward) {
      res += forward[ch];
    } else {
      res += ch;
    }
  }
  return res;
};

console.log(solution("you'll n4v4r 6u4ss 8t: cdja"));
