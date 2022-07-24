const _hasOwn = Object.prototype.hasOwnProperty

export function hasOwn <T, K extends PropertyKey> (x :T, key :K | keyof T) :key is keyof T
export function hasOwn (x :any,     key :PropertyKey) :boolean
export function hasOwn (x :unknown, key :PropertyKey) :boolean {
	return _hasOwn.call(x, key)
}
