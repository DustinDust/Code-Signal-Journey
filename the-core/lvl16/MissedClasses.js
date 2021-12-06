const solution = (year, daysOfWeek, holidays) => {
  let count = 0;
  const holidates = [...holidays].map((str) => {
    const [month, date] = str.split('-').map(Number);
    if (month >= 9) {
      return new Date(year, month - 1, date, 0, 0, 0, 0);
    }
    if (month < 8) {
      return new Date(year + 1, month - 1, date, 0, 0, 0, 0);
    }
  });
  console.log(holidates);
  const weekDay = daysOfWeek.map((d) => {
    if (d === 7) return 0;
    else return d;
  });
  console.log(weekDay);
  for (const date of holidates) {
    for (const day of weekDay) {
      if (date.getDay() === day) count++;
    }
  }
  return count;
};

console.log(
    solution(
        2015,
        [2, 3],
        ['11-04', '02-22', '02-23', '03-07', '03-08', '05-09']
    )
);
