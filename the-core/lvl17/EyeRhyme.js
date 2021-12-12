function solution (pairOfLines) {
  let re = /.*(.{3})\t.*(.{3})/;
  let match = re.exec(pairOfLines)
  return match[1] === match[2];
}

console.log(solution('cough\tbough'));
