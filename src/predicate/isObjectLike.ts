import type { ObjectLike } from '../../types/core/basic'

export function isObjectLike (x :unknown) :x is ObjectLike {
	const type = typeof x
	return x != null && (type === 'object' || type === 'function')
}
