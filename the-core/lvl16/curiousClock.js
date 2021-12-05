const solution = (someTime, leaveTime) => {
  const getDate = (dt) => {
    const [day, time] = dt.split(' ');
    const [year, month, date] = day.split('-').map((v) => parseInt(v));
    const [hour, minute] = time.split(':').map((v) => parseInt(v));
    return new Date(year, month - 1, date, hour, minute);
  };

  const someDate = getDate(someTime);
  const leaveDate = getDate(leaveTime);
  const dif = leaveDate.getTime() - someDate.getTime();
  someDate.setTime(someDate.getTime() - dif);
  return `${someDate.getFullYear()}-${(someDate.getMonth() + 1)
      .toString()
      .padStart(2, '0')}-${someDate
      .getDate()
      .toString()
      .padStart(2, '0')} ${someDate
      .getHours()
      .toString()
      .padStart(2, '0')}:${someDate.getMinutes().toString().padStart(2, '0')}`;
};
