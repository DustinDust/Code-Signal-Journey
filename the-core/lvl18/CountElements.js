function solution(inputString) {
  let trimString = inputString.slice();
  let p = 0;
  let strCnt = 0;
  let str = '';
  for (const x of inputString) {
    if (p === 1) {
      str+= x;
    }
    if (x === '"') {
      if (p === 1) {
        strCnt++;
        p--;
        trimString = trimString.replace(str, '');
        str = '';
      } else {
        p++;
        str += x;
      }
    }
  }
  console.log(trimString, strCnt);
  let rgx = /([0-9]+|true|false)/g;
  return strCnt + (trimString.match(rgx) ? trimString.match(rgx).length : 0);
}

console.log(solution('[ "one", 2, "three" ]'));
