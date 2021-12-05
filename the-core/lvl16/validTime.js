const solution = (time) => {
  const [hour, min] = time.split(':').map((val) => parseInt(val));
  if (hour > 23 || hour < 0) return false;
  if (min > 59 || min < 0) return false;
  return true;
};
