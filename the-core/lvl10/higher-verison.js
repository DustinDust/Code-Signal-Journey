const solution = (ver1, ver2) => {
  let vN1 = ver1.split('.').map(val => parseInt(val));
  let vN2 = ver2.split('.').map(val => parseInt(val));
  console.log(vN1, vN2);
  for(let i = 0; i < vN1.length; i++) {
    if(vN1[i] < vN2[i]) return false;
    else if(vN1[i] > vN2[i]) return true;
    else continue;
  }
  return false;
}

solution('1.2.3', '4.2.5');
