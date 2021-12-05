const solution = (bdD) => {
  let ans = 0;
  const [month, date, year] = bdD.split('-').map((val) => parseInt(val));
  const birthDay = new Date(year, month - 1, date);
  const isLeapYear = (year) => {
    if (year % 4 !== 0) return false;
    else {
      if (year % 100 === 0) {
        if (year % 400 !== 0) return false;
        else return true;
      }
      return true;
    }
  };
  const weekDay = birthDay.getDay();
  const is4YearEach =
    isLeapYear(birthDay.getFullYear()) &&
    birthDay.getMonth() + 1 === 2 &&
    birthDay.getDate() === 29;

  do {
    if (is4YearEach) {
      if (isLeapYear(birthDay.getFullYear() + 4)) {
        birthDay.setFullYear(birthDay.getFullYear() + 4);
        ans += 4;
      } else {
        birthDay.setFullYear(birthDay.getFullYear() + 8);
        ans += 8;
      }
    } else {
      birthDay.setFullYear(birthDay.getFullYear() + 1);
      ans = ans + 1;
    }
  } while (weekDay !== birthDay.getDay());
  console.log(birthDay.toString());
  return ans;
};
