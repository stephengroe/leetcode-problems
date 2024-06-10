/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
  return {
      toBe: (a) => {
          if (a !== val) throw new Error("Not Equal");
          else return true;
      },

      notToBe: (b) => {
          if (b === val) throw new Error("Equal");
          else return true;
      }
  };
};
