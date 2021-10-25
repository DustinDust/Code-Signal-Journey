const arrayPacking = (a) => {
  return Number.parseInt(
      a.reverse().reduce((ans, val) => {
        const mininalBinStr = val.toString(2);
        const fullBinStr = '0'.repeat(8 - mininalBinStr.length) + mininalBinStr;
        return ans + fullBinStr;
      }, ''),
      2
  );
};
