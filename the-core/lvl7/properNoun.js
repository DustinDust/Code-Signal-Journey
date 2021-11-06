const properNounCorrection = (noun) => {
  const proper = noun.toLowerCase();
  return proper[0].toUpperCase() + proper.slice(1);
};

