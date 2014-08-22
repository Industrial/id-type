var assert, fail, toString, type;

assert = require("assert");

toString = {}.toString;

fail = function(actual, expected, message, operator, stackStartFunction) {
  throw new assert.AssertionError({
    message: message,
    actual: actual,
    expected: expected,
    operator: operator,
    stackStartFunction: stackStartFunction
  });
};

type = function(a) {
  return (toString.call(a)).slice(8, -1);
};

type.isArray = function(a) {
  return (type(a)) === "Array";
};

type.isBoolean = function(a) {
  return (type(a)) === "Boolean";
};

type.isFunction = function(a) {
  return (type(a)) === "Function";
};

type.isNull = function(a) {
  return (type(a)) === "Null";
};

type.isNumber = function(a) {
  return (type(a)) === "Number";
};

type.isObject = function(a) {
  return (type(a)) === "Object";
};

type.isString = function(a) {
  return (type(a)) === "String";
};

type.isUndefined = function(a) {
  return (type(a)) === "Undefined";
};

type.assertArray = function(a) {
  if (!type.isArray(a)) {
    return fail(type(a), "Array", null, null, type.assertArray);
  }
};

type.assertBoolean = function(a) {
  if (!type.isBoolean(a)) {
    return fail(type(a), "Boolean", null, null, type.assertBoolean);
  }
};

type.assertFunction = function(a) {
  if (!type.isFunction(a)) {
    return fail(type(a), "Function", null, null, type.assertFunction);
  }
};

type.assertNull = function(a) {
  if (!type.isNull(a)) {
    return fail(type(a), "Null", null, null, type.assertNull);
  }
};

type.assertNumber = function(a) {
  if (!type.isNumber(a)) {
    return fail(type(a), "Number", null, null, type.assertNumber);
  }
};

type.assertObject = function(a) {
  if (!type.isObject(a)) {
    return fail(type(a), "Object", null, null, type.assertObject);
  }
};

type.assertString = function(a) {
  if (!type.isString(a)) {
    return fail(type(a), "String", null, null, type.assertString);
  }
};

type.assertUndefined = function(a) {
  if (!type.isUndefined(a)) {
    return fail(type(a), "Undefined", null, null, type.assertUndefined);
  }
};

module.exports = type;
