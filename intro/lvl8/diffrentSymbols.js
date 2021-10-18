const differentSymbolsNaive = (s) => {
  const stack = [];
  s.split('').forEach((value)=>{
    if (stack.includes(value)) return;
    else stack.push(value);
  });
  return stack.length;
};

differentSymbolsNaive('abbbcc');
