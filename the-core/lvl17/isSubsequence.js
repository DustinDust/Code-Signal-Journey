function solution(t, s) {
  var pattern = '';
  for (var i = 0; i < s.length; i++) {
    pattern +=
      '.*' +
      (function (c) {
        if (c === ' ') return '\\s';
        if ('+*?^$.[]{}()|/'.includes(c)) return '\\' + c;
        if (c === '\\') return '\\\\';
        return c;
      })(s[i]);
  }
  var re = new RegExp(pattern);
  return re.test(t);
}

console.log(solution('CodeSignal', 'CoSi'));
