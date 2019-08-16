import splitIfBoxedBug, {implementation} from '../src/split-if-boxed-bug-x';

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

const nullPrimitives = [void 0, null];
const numbers = [0, -0, Infinity, -Infinity, 42];

const strings = ['', 'foo'];
const booleans = [true, false];

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

  it('should return strings', function() {
    expect.assertions(1);
    expect(strings.map(splitIfBoxedBug)).toStrictEqual(strings);
  });
});

describe('implementation', function() {
  it('is a function', function() {
    expect.assertions(1);
    expect(typeof implementation).toBe('function');
  });

  it('should return value for non-strings', function() {
    expect.assertions(1);
    expect(nonStrings.map(implementation)).toStrictEqual(nonStrings);
  });

  it('should return array of characters', function() {
    expect.assertions(1);
    const expected = strings.map(function(item) {
      return item.split('');
    });

    expect(strings.map(implementation)).toStrictEqual(expected);
  });
});
