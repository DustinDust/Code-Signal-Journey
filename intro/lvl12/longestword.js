const longestWord = (text) => {
  const matches = text.matchAll(/[a-zA-Z]+/ig);
  let ans = '';
  for (const match of matches) {
    if (ans.length < match[0].length) {
      ans = match[0];
    }
  }
  return ans;
};
console.log(longestWord('Ready, steady, go!'));
