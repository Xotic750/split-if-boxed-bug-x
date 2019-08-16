import hasBoxed from 'has-boxed-string-x';
import isString from 'is-string';
import methodize from 'simple-methodize-x';

const EMPTY_STRING = '';
const strSplit = methodize(EMPTY_STRING.split);

const identity = function splitIfBoxedBug(value) {
  return value;
};

export const implementation = function splitIfBoxedBug(value) {
  return isString(value) ? strSplit(value, EMPTY_STRING) : identity(value);
};

/**
 * This method tests if a value is a string with the boxed bug; splits to an
 * array for iteration; otherwise returns the original value.
 *
 * @param {*} [value] - The value to be tested.
 * @returns {*} An array or characters if value was a string with the boxed bug;
 *  otherwise the value.
 */
const $splitIfBoxedBug = hasBoxed ? identity : implementation;

export default $splitIfBoxedBug;
