const variableName = (name) => {
  if (/^\d/.test(name)) {
    return false;
  }
  if (/[^\d\w_]/.test(name)) {
    return false;
  }
  return true;
};

console.log(variableName('var_1__Int'));
