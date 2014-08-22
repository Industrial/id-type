assert = require "assert"

arraySlice = Array.prototype.slice
objectToString = Object.prototype.toString

TYPES = [
	"Array"
	"Boolean"
	"Function"
	"Null"
	"Number"
	"Object"
	"String"
	"Undefined"
]

curry = (fn) ->
	args = arraySlice.call arguments, 1
	->
		fn.apply @, args.concat arraySlice.call arguments, 0

fail = (actual, expected, message, operator, stackStartFunction) ->
	throw new assert.AssertionError
		message: message
		actual: actual
		expected: expected
		operator: operator
		stackStartFunction: stackStartFunction

type = (a) ->
	objectToString.call a
	.slice 8, -1

type.of = type

type.is = (t, a) ->
	t is type a

type.assert = (t, a) ->
	unless type.is t, a
		fail (type a), t, null, "passed but expected", type.assert

TYPES.map (t) ->
	type["is#{t}"] = curry type.is, t
	type["assert#{t}"] = curry type.assert, t

module.exports = type
