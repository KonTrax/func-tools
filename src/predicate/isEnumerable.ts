const _propertyIsEnumerable = Object.prototype.propertyIsEnumerable

//=== Signatures ===

/**
 * Determines whether `target` has own enumerable property `key`
 *
 * @throws {TypeError} Throws `TypeError` if target is `null` or `undefined`
 */
export function isEnumerable <T extends any, K extends PropertyKey> (
	target :T,
	key    :K | keyof T
)        :boolean

export function isEnumerable (
	target :any,
	key    :PropertyKey
)        :boolean

//=== Implementation ===

export function isEnumerable (x :unknown, key :PropertyKey) :boolean {
	if (x == null) throw new TypeError('null or undefined')
	return _propertyIsEnumerable.call(x, key)
}
