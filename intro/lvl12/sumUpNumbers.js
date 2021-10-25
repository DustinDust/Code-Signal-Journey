const sumUpNumbers = (inputString) => {
  const matches = inputString.matchAll(/\d+/g);
  let Sum = 0;
  for (const match of matches) {
    Sum += Number(match);
  }
  return Sum;
};
