import { objectType } from '../reflection/objectType'

export function isPlainObject (x :unknown) :x is object {
	return typeof x === 'object' && objectType(x) === 'Object'
}
