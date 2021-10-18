const addBorder = (picture) => {
  const length = picture[0].length + 2;
  for (let i = 0; i < picture.length; i++) {
    picture[i] = '*'.concat(picture[i]);
    picture[i] = picture[i].concat('*');
  }
  const ateriskString = '*'.repeat(length);
  picture.unshift(ateriskString);
  picture.push(ateriskString);
  return picture;
};

console.log(addBorder(['abc', 'ded']));
