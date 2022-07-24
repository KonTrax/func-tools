//=== Signatures ===

/**
 * Determines whether `x` has own writable property `key`
 */
export function isWritable <T extends any, K extends PropertyKey> (
	x   :T,
	key :K | keyof T
)     :boolean

export function isWritable (
	x   :any,
	key :PropertyKey
)     :boolean

//=== Implementation ===

export function isWritable (x :unknown, key :PropertyKey) :boolean {
	const   desc = Object.getOwnPropertyDescriptor(x, key)
	return (desc && desc.writable) === true
}
