var TYPES, arraySlice, assert, curry, objectToString, type;

assert = require("assert");

arraySlice = Array.prototype.slice;

objectToString = Object.prototype.toString;

TYPES = ["Array", "Boolean", "Function", "Null", "Number", "Object", "String", "Undefined"];

curry = function(fn) {
  var args;
  args = arraySlice.call(arguments, 1);
  return function() {
    return fn.apply(this, args.concat(arraySlice.call(arguments, 0)));
  };
};

type = function(a) {
  return objectToString.call(a).slice(8, -1);
};

type.of = type;

type.is = function(t, a) {
  return t === type(a);
};

type.fail = function(actual, expected, message, operator, stackStartFunction) {
  throw new assert.AssertionError({
    message: message,
    actual: actual,
    expected: expected,
    operator: operator,
    stackStartFunction: stackStartFunction
  });
};

type.assert = function(t, a) {
  if (!type.is(t, a)) {
    return type.fail(type(a), t, null, "passed but expected", type.assert);
  }
};

TYPES.map(function(t) {
  type["is" + t] = curry(type.is, t);
  return type["assert" + t] = curry(type.assert, t);
});

module.exports = type;
