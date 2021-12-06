const solution = (takeoffTime, minutes) => {
  let [h, m] = takeoffTime.split(':').map((v) => parseInt(v));
  let count = 0;
  const landingtime = minutes[minutes.length - 1];
  let state = true;
  const periods = minutes.slice();
  for (let i = 1; i < minutes.length; i++) {
    periods[i] = minutes[i] - minutes[i - 1];
  }
  if (h === 0 && m === 0) count++;
  for (let k = 0; k < periods.length; k++) {
    for (let i = 1; i <= periods[k]; i++) {
      // console.log(`${h}:${m}`);
      m++;
      if (m > 59) {
        m = 0;
        h++;
        if (h > 23) h = 0;
      }
      if (h === 0 && m === 0) {
        state = false;
        count++;
      }
    }
    // console.log(`${h}:${m}`);
    h--;
    if (h < 0) {
      state = true;
      h = 23;
    }
    if (h === 0 && m === 0) {
      state = false;
      count++;
    }
  }
  if ((state === true)) count++;
  return count;
};

console.log(
    solution(
        '17:10',
        [150, 160, 293, 589, 614, 716, 760, 776, 781, 911, 1040, 1438]
    )
);
