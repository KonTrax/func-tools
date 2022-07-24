const _getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor

//=== Signatures ===

/**
 * Determines whether `target` has own configurable property `key`
 *
 * @throws {TypeError} Throws `TypeError` if target is `null` or `undefined`
 */
export function isConfigurable <T extends any, K extends PropertyKey> (
	target :T,
	key    :K | keyof T
)        :boolean

export function isConfigurable (
	target :any,
	key    :PropertyKey
)        :boolean

//=== Implementation ===

export function isConfigurable (x :unknown, key :PropertyKey) :boolean {
	if (x == null) throw new TypeError('null or undefined')
	const   desc = _getOwnPropertyDescriptor(x, key)
	return (desc && desc.configurable) === true
}
