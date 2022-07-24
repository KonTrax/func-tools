import type { Primitive } from '../../types/core/basic'

export function isPrimitive (x :unknown) :x is Primitive {
	const type = typeof x
	return x == null || (type !== 'object' && type !== 'function')
}

export function isPrimitiveStrict (x :unknown) :x is Primitive {
	return Object(x) !== x
}
