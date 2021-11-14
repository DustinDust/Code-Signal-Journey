const integerToStringOfFixedWidth = (number, width) => {
  let numStr = number.toString();
  if (numStr.length < width) {
    return '0'.repeat(width - numStr.length) + numStr;
  }
  if (numStr.length > width) {
    return numStr.slice(numStr.length - width);
  }
  return numStr;
};

console.log(integerToStringOfFixedWidth(1234, 2));
