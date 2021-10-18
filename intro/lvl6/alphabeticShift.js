const alphabeticShift = (inputString) => {
  return inputString
      .split('')
      .map((value) => {
        if (value === 'z') return 'a';
        return String.fromCharCode(value.charCodeAt(0) + 1);
      })
      .join('');
};

console.log(alphabeticShift('crazy'));
