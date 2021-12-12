function solution (t, s) => {
  let pattern = '';
  for (let i of s) {
    pattern += '.*['+ i +']';
  }
  let re = new RegExp(pattern);
  return re.test(t);
}
