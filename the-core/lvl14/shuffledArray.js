const solution = (shuffled) => {
  for (let i = 0; i < shuffled.length; i++) {
    const tempOriginal = [...shuffled.slice(0, i), ...shuffled.slice(i + 1)];
    if (shuffled[i] === tempOriginal.reduce((ans, val) => val + ans, 0)) {
      return tempOriginal.sort((a, b) => a - b);
    }
  }
};

console.log(solution([1, 12, 3, 6, 2]));
