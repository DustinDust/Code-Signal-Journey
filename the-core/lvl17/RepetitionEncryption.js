function solution(letter) {
  // the \1 is a reference to the first capture group
  var pattern = /([A-Za-z]+)[^A-Za-z]+\1([^A-Za-z]|\b)+?/gi;
  var matches = letter.match(pattern);
  console.log(matches);
  if (matches) {
    return matches.length;
  } else {
    return 0;
  }
}

solution('ho-ho--he-he');
