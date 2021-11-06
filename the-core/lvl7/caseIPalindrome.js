const isCaseInsensitivePalindrome = (inputString) => {
  const isPalindrome = (str) => {
    return str.split('').reverse().join('') === str;
  };

  return isPalindrome(inputString.toLowerCase());
};
