/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
  const originalValue = init;
  return {
      increment: () => ++init,
      decrement: () => --init,
      reset: () => init = originalValue
  }
};
