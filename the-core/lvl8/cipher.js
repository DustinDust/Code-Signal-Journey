const isSubstitutionCipher = (string1, string2) => {
  let isConvertible = (to, from) => {
    let map = {};
    for (let i = 0; i < to.length; i++) {
      if (!map.hasOwnProperty(to[i])) {
        map[to[i]] = from[i];
      } else {
        if (map[to[i]] !== from[i]) {
          return false;
        }
      }
    }
    return true;
  };
  return isConvertible(string1, string2) && isConvertible(string2, string1);
};
