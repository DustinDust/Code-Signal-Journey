function solution(program: string[]): string {
  let row: number = program.length;
  let col: number = program[0].length;

  // Direction: 0-U, 1-R, 2-D, 3-L
  let dir: number = 1;

  // Current position
  let rw: number = 0;
  let cl: number = 0;

  let stack: number[] = [];
  let out: string = '';

  // Two most basic functions
  let mv = (): void =>
    dir === 0 ? mu() : dir === 1 ? mr() : dir === 2 ? md() : ml();
  let pop = (): number => (stack.length ? stack.pop() : 0);

  // Movements
  let mr = (): void => {
    cl = cl === col - 1 ? 0 : cl + 1;
  };
  let ml = (): void => {
    cl = cl === 0 ? col - 1 : cl - 1;
  };
  let md = (): void => {
    rw = rw === row - 1 ? 0 : rw + 1;
  };
  let mu = (): void => {
    rw = rw === 0 ? row - 1 : rw - 1;
  };

  for (let _: number = 0; _ < 1e5; _++) {
    let c: string = program[rw][cl];
    if (c === '#') mv();
    else if (c === '>') dir = 1;
    else if (c === '<') dir = 3;
    else if (c === 'v') dir = 2;
    else if (c === '^') dir = 0;
    else if (c === '_') dir = pop() === 0 ? 1 : 3;
    else if (c === '|') dir = pop() === 0 ? 2 : 0;
    else if (c === '+') stack.push(pop() + pop());
    else if (c === '-') {
      let a: number = pop();
      stack.push(pop() - a);
    } else if (c === '*') stack.push(pop() * pop());
    else if (c === '/') {
      let a: number = pop();
      stack.push(Math.floor(pop() / a));
    } else if (c === '%') {
      let a: number = pop();
      stack.push(pop() % a);
    } else if (c === '!') stack.push(pop() === 0 ? 1 : 0);
    else if (c === '`') stack.push(pop() < pop() ? 1 : 0);
    else if (c === ':') {
      if (stack.length) stack.push(stack[stack.length - 1]);
    } else if (c === '\\') {
      let a: number = pop();
      stack.push(a, pop());
    } else if (c === '$') pop();
    else if (c === '.') {
      out += `${pop()} `;
      if (out.length >= 100) break;
    } else if (c === ',') {
      out += String.fromCharCode(pop());
      if (out.length >= 100) break;
    } else if (/\d/.test(c)) stack.push(+c);
    else if (c === '"') {
      while (true) {
        mv();
        c = program[rw][cl];
        if (c === '"') break;
        stack.push(c.charCodeAt(0));
      }
    } else if (c === ' ') {
    } else if (c === '@') break;
    mv();
  }
  return out;
}
