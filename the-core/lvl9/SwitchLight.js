const _ = require('underscore');
const switchLights = (a) => {
  let state = a.slice();
  const switchState = (k) => {
    for (let i = 0; i <= k; i++) {
      state[i] = state[i] === 1 ? 0 : 1;
    }
  };
  for (let i = 0; i < a.length; i++) {
    state[i] = a[i];
    if (a[i] === 1) {
      switchState(i);
    }
  }
  return state;
};

console.log(switchLights([1, 1, 1, 1, 1]));
