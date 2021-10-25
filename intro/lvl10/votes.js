const electionsWinners = (votes, k) => {
  const max = Math.max(...votes);
  const isMaxUnique =
    votes.reduce((ans, value) => {
      if (value === max) {
        ans.push(value);
        return ans;
      } else return ans;
    }, []).length === 1;
  if (isMaxUnique && k===0) return 1;
  else {
    return votes.reduce((ans, value) => {
      if (value + k > max) return ans + 1;
      else return ans;
    }, 0);
  }
};
