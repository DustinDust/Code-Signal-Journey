const htmlEndTagByStartTag = (startTag) => {
  const ridOfBracket = startTag.slice(1, startTag.length - 1);
  const stuffs = ridOfBracket.split(' ');
  return '</' + stuffs[0] + '>';
};
