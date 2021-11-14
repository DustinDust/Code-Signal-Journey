const arrayReplace = (inputArray, elemToReplace, substitutionElem) => {
  return [...inputArray].map((value, index) => {
    if (value !== elemToReplace) return value;
    else return substitutionElem;
  });
};

