const pagesNumberingWithInk = (current, numberOfDigits) => {
  let curr= current;
  while (1) {
    if (curr.toString().length > numberOfDigits) break;
    else numberOfDigits -= curr.toString().length;
    curr++;
  }
  return curr - 1;
};
