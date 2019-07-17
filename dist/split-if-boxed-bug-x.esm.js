import hasBoxed from 'has-boxed-string-x';
import isString from 'is-string';
var EMPTY_STRING = '';
var strSplit = EMPTY_STRING.split;
var isStringFn = hasBoxed === false && typeof strSplit === 'function' && isString;
/**
 * This method tests if a value is a string with the boxed bug; splits to an
 * array for iteration; otherwise returns the original value.
 *
 * @param {*} [value] - The value to be tested.
 * @returns {*} An array or characters if value was a string with the boxed bug;
 *  otherwise the value.
 */

var splitIfBoxedBug = function splitIfBoxedBug(value) {
  return isStringFn && isStringFn(value) ? strSplit.call(value, EMPTY_STRING) : value;
};

export default splitIfBoxedBug;

//# sourceMappingURL=split-if-boxed-bug-x.esm.js.map