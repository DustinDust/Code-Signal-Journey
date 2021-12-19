const solution = (lrcLyric, songLength) => {
  const getData = (lrcString) => {
    let findR = /\[(\d\d):(\d\d)\.(\d\d)\] ?(.*)/g;
    let data = findR.exec(lrcString);
    return {
      minute: data[1],
      second: data[2],
      milisec: data[3],
      lyric: data[4].trim() || '',
    };
  };

  const findStimeString = ({minute, second, milisec}) => {
    let hour = 0;
    let min = parseInt(minute);
    if (min > 59) {
      min -= 60;
      hour = 1;
    }
    let secStr = second + ',' + milisec.padEnd(3, '0');
    let hStr = hour.toString().padStart(2, '0');
    let mStr = min.toString().padStart(2, '0');
    return `${hStr}:${mStr}:${secStr}`;
  };

  const getSubrip = (index, begin, end) => {
    let beginTimeString = findStimeString(begin);
    let endTimeString = findStimeString(end);
    return [
      index.toString(),
      `${beginTimeString} --> ${endTimeString}`,
      begin.lyric,
    ];
  };
  let res = [];
  let lrData = lrcLyric.map((lr) => getData(lr));
  for (let i = 0; i < lrData.length - 1; i++) {
    res.push(getSubrip(i + 1, lrData[i], lrData[i + 1]));
    res.push('');
  }
  res.push([
    lrData.length.toString(),
    findStimeString(lrData[lrData.length - 1]) + ' --> ' + songLength + ',000',
    lrData[lrData.length - 1].lyric,
  ]);
  return res.flat();
};

let lrcLyric = [
  '[00:09.01]',
  '[00:10.01] Sweet dreams are made of this',
  '[00:13.26] Who am I to disagree?',
  '[00:17.01] Travel the world and the seven seas',
  '[00:20.95] Everybodys looking for something',
  '[00:24.57]',
  '[00:24.82] Some of them want to use you',
  '[00:28.64] Some of them want to get used by you',
  '[00:32.45] Some of them want to abuse you',
  '[00:36.32] Some of them want to be abused',
  '[00:40.32]',
  '[00:52.00] Sweet dreams are made of this',
  '[00:55.37] Who am I to disagree?',
  '[00:59.18] Travel the world and the seven seas',
  '[01:03.00] Everybodys looking for something',
  '[01:48.34] Some of them want to use you',
  '[01:52.16] Some of them want to get used by you',
  '[01:55.97] Some of them want to abuse you',
  '[01:59.72] Some of them want to be abused',
  '[02:03.58]',
  '[01:18.17]',
  '[01:29.17] Hold your head up, movin on',
  '[01:19.18] Hold your head up',
  '[01:31.11] Keep your head up',
  '[01:19.92] Keep your head up, movin on',
  '[01:21.86] Hold your head up, movin on',
  '[01:23.74] Keep your head up, movin on',
  '[01:25.67] Hold your head up, movin on',
  '[01:27.55] Keep your head up, movin on',
];

let songLength = '00:09:32';

console.log(solution(lrcLyric, songLength));
