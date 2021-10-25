const messageFromBinaryCode = (code) => {
  let str;
  const answer = [];
  for (let i = 0; i < code.length; i += 8) {
    str = code.substr(i, 8);
    answer.push(String.fromCharCode(Number.parseInt(str, 2)));
  }
  return answer.join('');
};

console.log(
    messageFromBinaryCode('010010000110010101101100011011000110111100100001')
);
