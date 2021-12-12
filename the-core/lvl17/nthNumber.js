/**
 *
 * Explanation: the regex
 * * First group: ([1-9]+[0-9])* : matchs a sequence of number that begins with
 * at least one non 0 num (trail) and can end with any number. Keep in
 * mind that this is a capture group that we can use to refer to latter
 * * The second group: (([1-9]+[0-9]*).*?): matches the number sequences
 * (the group above) that is followed by anything (.*),
 * but do the match lazily (?), which means it will try to match
 * as few characters as possible
 * * Lastly: the quantifier: {n} means that the regex will match up to
 * n of the second group. With each match, the fisrt capture group is the
 * required number
 *
 * @param {String} s
 * @param {number} n
 * @return {number}
 */
function solution(s, n) {
  let re = new RegExp('(([1-9]+[0-9]*).*?){' + n + '}');
  return re.exec(s)[1];
}

// /([1-9]+[0-9]*).*?([1-9]+[0-9]*).*?/

/**
 * Example: 8one 003number 201numbers li-000233le number444
 * with {1}; 8, 3, 201, 233, 444 will match.
 * with {2}; 8one 003, 201numbers li-000233 will match, the first group
 * of the first match is 3, the first group of the second match is 233
 * with {3}; 8one 003number 201, 233le number444 will match. The first
 * group of the first match is 201, the first group of the second match
 * is 4 (this is because of lazy match and some grouping)
 * with {4}; 8one 003number 201numbers li-000233 will match, and the first
 * group is 233
*/
