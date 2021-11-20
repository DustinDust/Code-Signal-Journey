const solution = (items) => {
  const less = new Array(items.length).fill(-1);
  [...items].forEach((val, index) => {
    for (let i = index - 1; i >= 0; i--) {
      if (val > items[i]) {
        less[index] = items[i];
        break;
      }
    }
  });
  return less;
};
