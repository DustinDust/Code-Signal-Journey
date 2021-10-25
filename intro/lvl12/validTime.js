const validTime = (timeString) => {
  const time = timeString.split(':');
  return (
    Number.parseInt(time[0]) < 24 &&
    Number.parseInt(time[0]) >= 0 &&
    Number.parseInt(time[1]) >= 0 &&
    Number.parseInt(time[1]) < 60
  );
};

validTime('12:00');
