/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  let y = x.toString().split("").reverse().join("");
  if (x.toString() === y) return true;
  else return false;
};