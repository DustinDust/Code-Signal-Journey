
const solution = (array) => {
  let a = Array.from(array);
  let track = 1;
  while (a.length !== 1) {
    const temparr = [];
    for (let i = 0; i < a.length; i += 2) {
      if (track % 2 !== 0) {
        temparr.push(a[i] + a[i + 1]);
      } else {
        temparr.push(a[i] * a[i + 1]);
      }
    }
    a = temparr;
    track++;
  }
  return a[0];
};
