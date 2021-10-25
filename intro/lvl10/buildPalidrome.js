const TryBuildPalindrome = (st) => {
  const stArray = st.split('');
  let pivot = st.length - 1;
  let pivotLeftLength = 0;
  for (let i = st.length - 2; i >= Math.ceil(st.length / 2); i--) {
    const currentSub = stArray.slice(i);
    const length = currentSub.length;
    let foundIndex = st.lastIndexOf(currentSub.reverse().join(''));
    if (foundIndex === i) {
      foundIndex = st
          .slice(0, i + 1)
          .lastIndexOf(currentSub.reverse().join(''));
    }
    if (foundIndex === -1) continue;
    else if (foundIndex + length - 1 === i - 1) {
      pivot = i;
      pivotLeftLength = length;
    } else if (foundIndex + length - 1 === i) {
      pivot = i;
      pivotLeftLength = length - 1;
    }
  }

  console.log(pivot);
  console.log(pivotLeftLength);

  return stArray
      .concat(stArray.slice(0, pivot - pivotLeftLength).reverse())
      .join('');
};


const buildPalindrome = (st) => {
  const isPalindrome = (str) => {
    return str === str.split('').reverse().join('');
  };
  let attempt = st.slice();
  let n = 1;
  while (!isPalindrome(attempt)) {
    const pushString = st.substr(0, n).split('').reverse().join('');
    attempt = st + pushString;
    n++;
  }
  return attempt;
};
