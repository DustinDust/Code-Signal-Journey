function solution(code, args) {
  let argumentVariants = args.join('|');
  let re = new RegExp('(\\W)\\$?(' + argumentVariants + ')(?=\\W)', 'g');
  let sub = '$1$$$2';
  return code.replace(re, sub);
}
