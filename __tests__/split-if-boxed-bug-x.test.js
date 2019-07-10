import splitIfBoxedBug from 'src/split-if-boxed-bug-x';

const boxedString = Object('a');
const hasBoxedString = boxedString[0] === 'a' && 0 in boxedString;
const itBoxed = hasBoxedString ? it : xit;
const itBug = hasBoxedString === false ? it : xit;

/* eslint-disable-next-line compat/compat */
const hasSymbols = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol';

const coercibleObject = {
  toString() {
    return 42;
  },
  valueOf() {
    return 3;
  },
};

const valueOfOnlyObject = {
  toString() {
    return {};
  },
  valueOf() {
    return 4;
  },
};

const toStringOnlyObject = {
  toString() {
    return 7;
  },
  valueOf() {
    return {};
  },
};

const objects = [{}, coercibleObject, toStringOnlyObject, valueOfOnlyObject];
/* eslint-disable-next-line no-void */
const nullPrimitives = [void 0, null];
const numbers = [0, -0, Infinity, -Infinity, 42];

const strings = ['', 'foo'];
const booleans = [true, false];
/* eslint-disable-next-line compat/compat */
const symbols = hasSymbols ? [Symbol.iterator, Symbol('foo')] : [];
const nonStrings = [].concat(nullPrimitives, booleans, numbers, symbols, objects);

describe('splitIfBoxedBug', function() {
  it('is a function', function() {
    expect.assertions(1);
    expect(typeof splitIfBoxedBug).toBe('function');
  });

  it('should return value for non-strings', function() {
    expect.assertions(1);
    expect(nonStrings.map(splitIfBoxedBug)).toStrictEqual(nonStrings);
  });

  itBoxed('should return strings', function() {
    expect.assertions(1);
    expect(strings.map(splitIfBoxedBug)).toStrictEqual(strings);
  });

  itBug('should return array of characters', function() {
    expect.assertions(1);
    const expected = strings.map(function(item) {
      return item.split('');
    });

    expect(strings.map(splitIfBoxedBug)).toStrictEqual(expected);
  });
});
