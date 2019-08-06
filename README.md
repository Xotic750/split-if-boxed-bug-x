<a
  href="https://travis-ci.org/Xotic750/split-if-boxed-bug-x"
  title="Travis status">
<img
  src="https://travis-ci.org/Xotic750/split-if-boxed-bug-x.svg?branch=master"
  alt="Travis status" height="18">
</a>
<a
  href="https://david-dm.org/Xotic750/split-if-boxed-bug-x"
  title="Dependency status">
<img src="https://david-dm.org/Xotic750/split-if-boxed-bug-x/status.svg"
  alt="Dependency status" height="18"/>
</a>
<a
  href="https://david-dm.org/Xotic750/split-if-boxed-bug-x?type=dev"
  title="devDependency status">
<img src="https://david-dm.org/Xotic750/split-if-boxed-bug-x/dev-status.svg"
  alt="devDependency status" height="18"/>
</a>
<a
  href="https://badge.fury.io/js/split-if-boxed-bug-x"
  title="npm version">
<img src="https://badge.fury.io/js/split-if-boxed-bug-x.svg"
  alt="npm version" height="18">
</a>
<a
  href="https://www.jsdelivr.com/package/npm/split-if-boxed-bug-x"
  title="jsDelivr hits">
<img src="https://data.jsdelivr.com/v1/package/npm/split-if-boxed-bug-x/badge?style=rounded"
  alt="jsDelivr hits" height="18">
</a>
<a
  href="https://bettercodehub.com/results/Xotic750/split-if-boxed-bug-x"
  title="bettercodehub score">
<img src="https://bettercodehub.com/edge/badge/Xotic750/split-if-boxed-bug-x?branch=master"
  alt="bettercodehub score" height="18">
</a>
<a
  href="https://coveralls.io/github/Xotic750/split-if-boxed-bug-x?branch=master"
  title="Coverage Status">
<img src="https://coveralls.io/repos/github/Xotic750/split-if-boxed-bug-x/badge.svg?branch=master"
  alt="Coverage Status" height="18">
</a>

<a name="module_split-if-boxed-bug-x"></a>

## split-if-boxed-bug-x

Tests if a value is a string with the boxed bug; splits to an array.

<a name="exp_module_split-if-boxed-bug-x--module.exports"></a>

### `module.exports(value)` ⇒ <code>\*</code> ⏏

This method tests if a value is a string with the boxed bug; splits to an
array for iteration; otherwise returns the original value.

**Kind**: Exported function  
**Returns**: <code>\*</code> - An array or characters if value was a string with the boxed bug;
otherwise the value.

| Param | Type            | Description             |
| ----- | --------------- | ----------------------- |
| value | <code>\*</code> | The value to be tested. |

**Example**

```js
import splitIfBoxedBug from 'split-if-boxed-bug-x';

// No boxed bug
console.log(splitIfBoxedBug('abc')); // 'abc'

// Boxed bug
console.log(splitIfBoxedBug('abc')); // ['a', 'b', 'c']
```
