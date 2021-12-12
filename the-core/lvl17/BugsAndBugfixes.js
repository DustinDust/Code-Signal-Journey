function solution(rules) {
  let pattern = /([0-9]*)d([0-9]+)(\+[1-9][0-9]*|-[1-9][0-9]*)?/g;
  let formula = pattern.exec(rules);
  console.log(formula);
  let res = 0;
  while (formula) {
    let rolls = formula[1] ? parseInt(formula[1]) : 1;
    let dieType = parseInt(formula[2]);

    let formulaMax = rolls * dieType;
    if (formula[3]) {
      if (formula[3][0] === '-') {
        formulaMax -= parseInt(formula[3].slice(1));
      } else {
        formulaMax += parseInt(formula[3].slice(1));
      }
    }

    res += formulaMax;
    formula = pattern.exec(rules);
    console.log(formula);
  }
  return res;
}

console.log(solution('d6-almost 01d4+2 12d01-3 5d5-00 a valid formula'));
