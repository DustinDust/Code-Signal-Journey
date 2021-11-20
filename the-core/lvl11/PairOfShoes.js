const solution = (shoes) => {
  const collection = {};
  [...shoes].forEach((val, index) => {
    if (!collection.hasOwnProperty(val[1])) {
      collection[val[1]] = {};
      collection[val[1]].number = 0;
      collection[val[1]].pair = {left: 0, right: 0};
    }
    collection[val[1]].number++;
    if (val[0] === 0) {
      collection[val[1]].pair.left++;
    } else {
      collection[val[1]].pair.right++;
    }
  });
  console.log(collection);
  for (const size in collection) {
    if (collection[size].number % 2 !== 0) return false;
    else if (collection[size].pair.left !== collection[size].pair.right) {
      return false;
    }
  }
  return true;
};
