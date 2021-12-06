const solution = (currMonth) => {
  const [month, year] = currMonth.split('-').map((v) => parseInt(v));
  const currDate = new Date(year, month - 1, 1, 0, 0, 0, 0);
  console.log(currDate);
  const isRegularMonth = (date) => {
    return date.getDate() === 1 && date.getDay() === 1;
  };

  do {
    currDate.setMonth(currDate.getMonth() + 1);
    console.log(currDate);
  } while (!isRegularMonth(currDate));

  return `${(currDate
      .getMonth() + 1)
      .toString()
      .padStart(2, '0')}-${currDate.getFullYear()}`;
};
