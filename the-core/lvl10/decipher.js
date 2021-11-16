const solution = (cipher) => {
  const message = cipher.slice();
  let res = '';
  let index = 0;
  while (index < message.length) {
    let currentChar = '';
    do {
      currentChar += message[index];
      index++;
    } while (parseInt(currentChar) < 97);
    res += String.fromCharCode(parseInt(currentChar));
  }
  console.log(res);
  return res;
};

solution('10197115121');
