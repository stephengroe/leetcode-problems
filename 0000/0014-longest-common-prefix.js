/**
 * @param {string[]} strs
 * @return {string}
 */
let longestCommonPrefix = function(strs) {
  if (strs.length === 1) return strs[0];
  let prefix = "";
  const array = strs.sort();
  const first = array[0];
  const last = array[array.length - 1];
  let match = true;

  for (let i=0; i<first.length; i+=1) {
      if (first[i] === last[i] && match) prefix = prefix + first[i];
      else {match = false};
  }

  return prefix;
};