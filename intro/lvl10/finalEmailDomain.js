const findEmailDomain = (address) => {
  return /(?<=@)[^"]+$/.exec(address)[0];
};

const anotherApproach = (address) => {
  return address.split('@').pop();
};

findEmailDomain('me@me.next');
anotherApproach('notme@totally.true');
