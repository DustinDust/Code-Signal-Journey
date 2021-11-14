const adaNumber = (line) => {
  if (line.search(/[^0-9A-Fa-f_#]/) !== -1) return false;
  const digits = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
  ];
  let smoothLine = line.replaceAll('_', '');
  let format = smoothLine.split('#');
  if (format.length > 1) {
    let base = Number.parseInt(format[0]);
    if (Number.isNaN(base)) {
      return false;
    }
    if (base > 16 || base < 2) return false;
    if (format[2] !== '') return false;
    if (format[1].length === 0) return false;
    let digitStr = digits.slice(0, base);
    for (let d of format[1]) {
      if (digitStr.indexOf(d.toUpperCase()) === -1) {
        return false;
      }
    }
    return true;
  } else {
    if (format[0].length === 0) return false;
    if (format[0].search(/\D/) !== -1) {
      console.log('find some');
      return false;
    }
    return true;
  }
};

console.log(adaNumber('__'));
