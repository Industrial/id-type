Type checking and assertion functions for all types but NaN.

# methods

```
var type = require('id-type');
```

## type(a)

Returns a `String` with the type of a variable.

## type.of(a)

Returns a `String` with the type of a variable.

## type.is(t, a)

Returns `true` if the type of a is t, otherwise returns `false`.

## type.isArray(a)

Returns `true` if the type of a is `Array`, otherwise returns `false`.

## type.isBoolean(a)

Returns `true` if the type of a is `Boolean`, otherwise returns `false`.

## type.isFunction(a)

Returns `true` if the type of a is `Function`, otherwise returns `false`.

## type.isNull(a)

Returns `true` if the type of a is `Null`, otherwise returns `false`.

## type.isNumber(a)

Returns `true` if the type of a is `Number`, otherwise returns `false`.

## type.isObject(a)

Returns `true` if the type of a is `Object`, otherwise returns `false`.

## type.isString(a)

Returns `true` if the type of a is `String`, otherwise returns `false`.

## type.isUndefined(a)

Returns `true` if the type of a is `Undefined`, otherwise returns `false`.

## type.assert(t, a)

Throws an `AssertionError` if the type of a is not t, otherwise returns `undefined`.

## type.assertArray(a)

Throws an `AssertionError` if the type of a is not `Array`, otherwise returns `undefined`.

## type.assertBoolean(a)

Throws an `AssertionError` if the type of a is not `Boolean`, otherwise returns `undefined`.

## type.assertFunction(a)

Throws an `AssertionError` if the type of a is not `Function`, otherwise returns `undefined`.

## type.assertNull(a)

Throws an `AssertionError` if the type of a is not `Null`, otherwise returns `undefined`.

## type.assertNumber(a)

Throws an `AssertionError` if the type of a is not `Number`, otherwise returns `undefined`.

## type.assertObject(a)

Throws an `AssertionError` if the type of a is not `Object`, otherwise returns `undefined`.

## type.assertString(a)

Throws an `AssertionError` if the type of a is not `String`, otherwise returns `undefined`.

## type.assertUndefined(a)

Throws an `AssertionError` if the type of a is not `Undefined`, otherwise returns `undefined`.
