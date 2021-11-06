const isTandemRepeat = (inputString) => {
  return (
    inputString.slice(0, Math.floor(inputString.length / 2)) ===
    inputString.slice(Math.floor(inputString.length / 2))
  );
};
