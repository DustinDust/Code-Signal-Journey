const makeArrayConsecutive2 = (statues) => {
  const ar = statues.sort((a, b) => {
    return a - b;
  });
  return [...ar].slice(1).reduce((ans, value, index) => {
    return ans + value - statues[index] - 1;
  }, 0);
};

console.log(makeArrayConsecutive2([6, 2, 3, 8]));
