const alternatingSums = (a) => {
  return [...a].reduce((prev, current, index) => {
    if ((index + 1) % 2 === 1) {
      prev[0] += current;
    } else {
      prev[1] += current;
    }
    return prev;
  }, [0, 0]);
};


console.log(alternatingSums([50, 60, 60, 45, 70]));
