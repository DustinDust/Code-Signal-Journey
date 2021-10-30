const lineUp = (commands) => {
  let count = 0;
  let isGood = true;
  for (const i of commands) {
    if (i === 'A' && isGood === true) {
      count++;
      continue;
    }
    if (i !== 'A' && isGood === false) {
      isGood = true;
      count++;
      continue;
    }
    if (i !== 'A' && isGood === true) {
      isGood = false;
      continue;
    }
  }
  return count;
};
