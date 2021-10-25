const isBeautifulString = (inputString) => {
  const count = new Array(26).fill(0);
  inputString.split('').forEach((element) => {
    count[element.charCodeAt(0) - 97]++;
  });
  return count.join('') === count.sort((a, b) => b - a).join('');
};

console.log(isBeautifulString('aabbb'));
