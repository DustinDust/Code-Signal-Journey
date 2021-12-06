const solution = (takeoffTime, minutes) => {
  const newyearEve = 1440; // 24 * 60, represented in minutes
  let count = 0;
  let time = takeoffTime
      .split(':') // string representation of time
      .map(Number) // map it to number
      .reverse() // reverse it so minute is 1st, hour is 2nd
      .map((v, i) => v * Math.pow(60, i)) // convert them all to minute
      .reduce((a, b) => a + b, 0); // get the total minute of the time;
  if (time === 0) time = newyearEve;
  const periods = minutes.slice();
  for (let i = 1; i < minutes.length; i++) {
    periods[i] = minutes[i] - minutes[i - 1];
  }
  for (const i of periods) {
    const celebratable = (time <= newyearEve);
    time += i;
    if (celebratable && time >= newyearEve) {
      count++;
    }
    time -= 60;
  }
  if (time <= newyearEve) count++;
  return count;
};
