const alphabetSubsequence = (s) => {
  //unique elements
  for (let i = 0; i < s.length; i++) {
    if (s.slice(i + 1).indexOf(s[i]) !== -1) {
      return false;
    }
  }
  let charCodeArr = s.split('').map((value) => value.charCodeAt(0));
  let unsorted = charCodeArr.slice();
  charCodeArr.sort((a, b) => a - b);
  return (
    unsorted.map((value) => String.fromCharCode(value)).join('') ===
    charCodeArr.map((value) => String.fromCharCode(value)).join('')
  );
};

const alphabetSubsequenceSet = (s) => {
  //using set to determine if there is any duplicate
  return s == [...new Set(s)].sort().join('');
}

const alphabetSubsequenceCompare = (s) => {
  for(let i = 0; i < s.length-1; i++) {
    if(!(s[i] < s[i+1])) {
      return false;
    }
  }
  return true;
}
