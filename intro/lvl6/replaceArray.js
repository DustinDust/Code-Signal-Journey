const arrayReplace = (inputArray, elemtoReplace, substitutionElem) =>{
  return inputArray.map((value, index) => {
    if (value === elemtoReplace) {
      return substitutionElem;
    } else return value;
  });
};

console.log(arrayReplace([1, 2, 1], 1, 3));
