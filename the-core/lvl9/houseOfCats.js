const houseOfCats = (legs) => {
  let res = [];
  for (let people = 0; ; people++) {
    if (Number.isInteger((legs - people * 2) / 4)) {
      res.push(people);
    }
    if ((legs - people * 2) / 4 == 0) {
      break;
    }
  }
  return res;
};
console.log(houseOfCats(6));
