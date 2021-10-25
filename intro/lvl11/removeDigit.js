const deleteDigit = (n) => {
  const charArray = n.toString().split('');
  return charArray.reduce((ans, value, index) => {
    const tempArray = charArray.slice();
    tempArray.splice(index, 1);
    const currValue = Number.parseInt(tempArray.join(''));
    ans = Math.max(currValue, ans);
    return ans;
  }, 0);
};

console.log(deleteDigit(152));
