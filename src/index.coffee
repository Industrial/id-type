assert = require "assert"

toString = {}.toString

fail = (actual, expected, message, operator, stackStartFunction) ->
	throw new assert.AssertionError
		message: message
		actual: actual
		expected: expected
		operator: operator
		stackStartFunction: stackStartFunction

type = (a) -> (toString.call a).slice 8, -1

type.isArray     = (a) -> (type a) is "Array"
type.isBoolean   = (a) -> (type a) is "Boolean"
type.isFunction  = (a) -> (type a) is "Function"
type.isNull      = (a) -> (type a) is "Null"
type.isNumber    = (a) -> (type a) is "Number"
type.isObject    = (a) -> (type a) is "Object"
type.isString    = (a) -> (type a) is "String"
type.isUndefined = (a) -> (type a) is "Undefined"

type.assertArray     = (a) -> fail (type a), "Array",     null, null, type.assertArray     unless type.isArray a
type.assertBoolean   = (a) -> fail (type a), "Boolean",   null, null, type.assertBoolean   unless type.isBoolean a
type.assertFunction  = (a) -> fail (type a), "Function",  null, null, type.assertFunction  unless type.isFunction a
type.assertNull      = (a) -> fail (type a), "Null",      null, null, type.assertNull      unless type.isNull a
type.assertNumber    = (a) -> fail (type a), "Number",    null, null, type.assertNumber    unless type.isNumber a
type.assertObject    = (a) -> fail (type a), "Object",    null, null, type.assertObject    unless type.isObject a
type.assertString    = (a) -> fail (type a), "String",    null, null, type.assertString    unless type.isString a
type.assertUndefined = (a) -> fail (type a), "Undefined", null, null, type.assertUndefined unless type.isUndefined a

module.exports = type
