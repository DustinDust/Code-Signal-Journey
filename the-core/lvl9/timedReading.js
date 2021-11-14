const timedReading = (maxLength, text) => {
  let words = text.split(' ').map((chars) => {
    return chars.replaceAll(/[\W]/g, '');
  });
  console.log(words);
  return words.filter((word) => word.length <= maxLength && word.length > 0)
    .length;
};

console.log(timedReading(4, "The Fox asked the stork, 'How is the soup?'"));
