const fileNaming = (names) => {
  const existed = {};
  [...names].forEach((name, index) => {
    if (existed.hasOwnProperty(name)) {
      while (existed.hasOwnProperty(name + '(' + existed[name] + ')')) {
        existed[name]++;
      }
      names[index] = name + '(' + existed[name] +')';
      existed[name]++;
      existed[names[index]] = 1;
    } else existed[name] = 1;
  });
  return names;
};

fileNaming(['a(1)', 'a(6)', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a']);
