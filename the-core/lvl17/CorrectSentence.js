function solution(sentence) {
  let re = /^[A-Z][^!\.?]*[!\.?]$/;
  return re.test(sentence);
}
