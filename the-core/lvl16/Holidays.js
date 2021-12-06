const solution = (x, w, m, y) => {
  const daymap = {
    Monday: 1,
    Tuesday: 2,
    Wednesday: 3,
    Thursday: 4,
    Friday: 5,
    Saturday: 6,
    Sunday: 0,
  };

  const monthmap = {
    January: 0,
    February: 1,
    March: 2,
    April: 3,
    May: 4,
    June: 5,
    July: 6,
    August: 7,
    September: 8,
    October: 9,
    November: 10,
    December: 11,
  };

  const day = daymap[w];
  let c = 1;
  const date = new Date(y, monthmap[m], 1, 0, 0, 0, 0);
  // get the current date to the first needed weekday
  while (date.getDay() !== day) {
    date.setDate(date.getDate() + 1);
  }

  while (c < x) {
    date.setDate(date.getDate() + 7);
    if (date.getMonth() !== monthmap[m]) return -1;
    c++;
  }
  return date.getDate();
};

solution(1, 'Thursday', 'January', 2015);
